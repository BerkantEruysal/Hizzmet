import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  Pressable,
  TouchableOpacity,
  Dimensions,
  LayoutAnimation,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import FullLogo from '../logo/FullLogo';
import colors from '../../utils/styles/DarkTheme';
import MapButton from '../IconButtons/MapButton';
import ExploreButton from '../IconButtons/ExploreButton';
import Searcher from '../searchInputs/Searcher';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

const screenWidth = Dimensions.get('window').width;

const ServiceConsumerSearchHeader = props => {
  const focusAnim = useRef(new Animated.Value(0)).current;
  const [isFocused, setIsFocused] = React.useState(false);
  const searchInputRef = useRef(null);
  const handleInputFocus = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsFocused(true);
    Animated.timing(focusAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
    console.log('asd');
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('blur', () => {
      setIsFocused(false);
      focusAnim.setValue(0);
    });
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setIsFocused(false);
        focusAnim.setValue(0);
        searchInputRef.current.focus();
      };
    }, []),
  );

  const handleSearcherFocus = () => {
    if (isFocused) return;
    focusAnim.setValue(0);
    searchInputRef.current.focus();
  };

  const blurSearcherFocus = () => {
    searchInputRef.current.blur();
    setIsFocused(false);
    Animated.timing(focusAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.searcherWrapper}>
          <Pressable style={{width: '85%'}} onPress={handleSearcherFocus}>
            <Searcher
              searchInputRef={searchInputRef}
              style={styles.searcherStyle({focusAnim, isFocused})}
              onFocus={handleInputFocus}></Searcher>
          </Pressable>

          <TouchableOpacity
            onPress={blurSearcherFocus}
            style={styles.cancelTextWrapper}>
            <Text style={styles.cancelText}>İptal et</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomPartContainer}>
          <Pressable
            style={{width: '50%'}}
            onPress={() => {
              props.changeListCategory(0);
            }}>
            <View
              style={styles.selectedCategoryTextWrapper(
                props.activeCategoryIndex == 0,
              )}>
              <Text
                style={styles.searchCategoryText(
                  props.activeCategoryIndex == 0,
                )}>
                Kategoriler
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={{width: '50%'}}
            onPress={() => {
              props.changeListCategory(1);
            }}>
            <View
              style={styles.selectedCategoryTextWrapper(
                props.activeCategoryIndex == 1,
              )}>
              <Text
                style={styles.searchCategoryText(
                  props.activeCategoryIndex == 1,
                )}>
                Hizmet Sağlayıcılar
              </Text>
            </View>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ServiceConsumerSearchHeader;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.background,
  },

  searcherWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    gap: 15,
  },
  cancelText: {
    color: colors.text,
  },
  cancelTextWrapper: {},
  searcherStyle: ({focusAnim, isFocused}) => ({
    backgroundColor: focusAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.secondary, colors.secondaryBackground],
    }),
    borderWidth: 1,
    borderColor: focusAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.secondary, colors.text],
    }),
    width: focusAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '100%'],
    }),

    bottom: 0,
    width: '100%',
    justifyContent: isFocused ? 'flex-start' : 'center',
  }),
  bottomPartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  searchCategoryText: isActive => ({
    color: isActive ? colors.primary : colors.text,
    fontWeight: '600',
  }),
  selectedCategoryTextWrapper: isActive => ({
    borderBottomWidth: 2,
    borderBottomColor: isActive ? colors.primary : 'transparent',
    paddingBottom: 5,
    width: '100%',
    alignItems: 'center',
    paddingTop: 10,
  }),
});
