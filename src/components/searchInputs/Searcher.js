import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  TextInput,
} from 'react-native';
import React from 'react';
import colors from '../../utils/styles/DarkTheme';
import SearchIcon from '../../assets/icons/searchIcon.svg';

const screenWidth = Dimensions.get('window').width;

const Searcher = props => {
  return (
    <Animated.View style={[styles.mainContainer, props.style]}>
      <SearchIcon color={colors.text} width={20}></SearchIcon>
      <TextInput autoFocus onFocus={props.onFocus} style={styles.searcherText}>
        FakeSearcher
      </TextInput>
    </Animated.View>
  );
};

export default Searcher;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 7,
    gap: 7,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 6,
    height: 35,
  },

  searcherText: {
    color: colors.text,
  },
});
