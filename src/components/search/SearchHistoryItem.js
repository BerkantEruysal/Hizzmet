import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../utils/styles/DarkTheme';
import ClockIcon from '../../assets/icons/clockIcon.svg';
import TopLeftArrowIcon from '../../assets/icons/topLeftArrowIcon.svg';

const SearchHistoryItem = props => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <ClockIcon></ClockIcon>
      <Text style={styles.text}>{props.name}</Text>
      <TopLeftArrowIcon style={styles.topLeftArrow}></TopLeftArrowIcon>
    </TouchableOpacity>
  );
};

export default SearchHistoryItem;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.background,
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontSize: 14,
    color: colors.text,
  },
  topLeftArrow: {
    marginLeft: 'auto',
  },
});
