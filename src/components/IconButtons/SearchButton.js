import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import SearchIcon from '../../assets/icons/searchIcon.svg';
import colors from '../../utils/styles/DarkTheme';

const SearchButton = ({color, onPress}) => {
  return (
    <Pressable style={styles.mainContainer} onPress={onPress}>
      <SearchIcon style={{color: color}}></SearchIcon>
    </Pressable>
  );
};

export default SearchButton;

const styles = StyleSheet.create({
  mainContainer: {
    width: 60,
    alignItems: 'center',
  },
});
