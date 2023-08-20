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

  const homeScreenScrollValue = useSelector(
    state => state.animation.homeScreenScrollValue,
  );

  const handleInputFocus = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsFocused(true);
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('blur', () => {
      setIsFocused(false);
      focusAnim.setValue(0);
    });
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      Animated.timing(focusAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }, [focusAnim]),
  );

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <Animated.View
          style={styles.topPartContainer({
            focusAnim,
            homeScreenScrollValue,
          })}>
          <MapButton></MapButton>
          <Animated.View style={styles.fullLogoStyle}>
            <FullLogo></FullLogo>
          </Animated.View>
          <ExploreButton></ExploreButton>
        </Animated.View>
        <View style={styles.searcherWrapper}>
          <Searcher
            onFocus={handleInputFocus}
            style={styles.searcherStyle(focusAnim, isFocused)}></Searcher>
          <TouchableOpacity style={styles.cancelTextWrapper}>
            <Text style={styles.cancelText}>İptal et</Text>
          </TouchableOpacity>
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

  topPartContainer: ({focusAnim, homeScreenScrollValue}) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: focusAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [
        homeScreenScrollValue < 100
          ? 50 - (homeScreenScrollValue * 45) / 100
          : 5,
        10,
      ],
    }),
    opacity: focusAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    }),
  }),

  searcherWrapper: {
    flexDirection: 'row',
  },
  cancelText: {
    color: colors.text,
  },
  cancelTextWrapper: {
    top: -37,
    right: 13,
    position: 'absolute',
  },
  searcherStyle: (focusAnim, isFocused, scrollValue) => ({
    backgroundColor: focusAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.secondary, colors.secondaryBackground],
    }),
    borderWidth: focusAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
    borderColor: focusAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.secondary, colors.text],
    }),
    width: focusAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '100%'],
    }),
    marginLeft: focusAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [15, 10],
      extrapolate: 'clamp',
    }),
    marginBottom: 12,
    position: 'absolute',
    bottom: 0,
    width: focusAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [screenWidth - 30, screenWidth - 80],
      extrapolate: 'clamp',
    }),
    justifyContent: isFocused ? 'flex-start' : 'center',
  }),
});
