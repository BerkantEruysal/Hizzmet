import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import UpArrowButton from '../IconButtons/UpArrowButton';
import colors from '../../utils/styles/DarkTheme';

const FrequentlyAskedQuestions = () => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.fqqHeader}>
        <Text style={styles.fqqText}>Sık sorulan sorular</Text>
        <UpArrowButton color={'red'}></UpArrowButton>
      </TouchableOpacity>
    </View>
  );
};

export default FrequentlyAskedQuestions;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.background,
    paddingVertical: 16,
  },
  fqqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  fqqText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
});
