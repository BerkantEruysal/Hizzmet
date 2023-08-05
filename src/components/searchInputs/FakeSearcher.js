import {StyleSheet, Text, View, Animated, Dimensions} from 'react-native';
import React from 'react';
import colors from '../../utils/styles/DarkTheme';
import SearchIcon from '../../assets/icons/searchIcon.svg';

const screenWidth = Dimensions.get('window').width;

const FakeSearcher = ({scrollValue}) => {
  return (
    <Animated.View style={styles.mainContainer(scrollValue)}>
      <SearchIcon color={colors.text} width={20}></SearchIcon>
      <Text style={styles.searcherText}>FakeSearcher</Text>
    </Animated.View>
  );
};

export default FakeSearcher;

const styles = StyleSheet.create({
  mainContainer: scrollValue => {
    return {
      backgroundColor: colors.secondary,
      padding: 7,
      justifyContent: 'center',
      gap: 7,
      alignItems: 'center',
      flexDirection: 'row',
      marginLeft: scrollValue.interpolate({
        inputRange: [0, 100],
        outputRange: [15, 60],
        extrapolate: 'clamp',
      }),
      marginBottom: 12,
      borderRadius: 6,
      height: 35,
      position: 'absolute',
      bottom: 0,
      width: scrollValue.interpolate({
        inputRange: [0, 100],
        outputRange: [screenWidth - 30, screenWidth - 120],
        extrapolate: 'clamp',
      }),
    };
  },
  searcherText: {
    color: colors.text,
  },
});
