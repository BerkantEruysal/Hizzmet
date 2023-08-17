import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../utils/styles/DarkTheme';

const FAQQuestion = () => {
  return (
    <View>
      <Text style={styles.questionText}>Soru metni soru metni?</Text>
      <Text style={styles.answerText}>
        Cevap metni cevap metni Cevap metni cevap metniCevap metni cevap metni
        Cevap metni cevap metni Cevap metni cevap metni Cevap metni cevap metni
      </Text>
    </View>
  );
};

export default FAQQuestion;

const styles = StyleSheet.create({
  questionText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginTop: 12,
  },
  answerText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.secondaryText,
    marginTop: 12,
  },
});
