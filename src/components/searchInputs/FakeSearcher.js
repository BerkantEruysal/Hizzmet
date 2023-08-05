import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../utils/styles/DarkTheme';
import SearchIcon from '../../assets/icons/searchIcon.svg';

const FakeSearcher = () => {
  return (
    <View style={styles.mainContainer}>
      <SearchIcon fill={colors.text}></SearchIcon>
      <Text style={styles.searcherText}>FakeSearcher</Text>
    </View>
  );
};

export default FakeSearcher;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.secondary,
    padding: 7,
    justifyContent: 'center',
    gap: 7,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 15,
    marginBottom: 12,
    borderRadius: 6,
  },
  searcherText: {
    color: colors.text,
  },
});
