import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../utils/styles/DarkTheme';
import MiniWriting from '../writings/MiniWriting';

const LastPublishedWritings = ({style}) => {
  return (
    <View style={[style, styles.mainContainer]}>
      <Text style={styles.titleText}>Son Yayımlanan Yazılara Göz At</Text>
      <View style={styles.writingsContainer}>
        <MiniWriting></MiniWriting>
        <View style={styles.seperator}></View>
        <MiniWriting></MiniWriting>
        <View style={styles.seperator}></View>
        <MiniWriting></MiniWriting>
        <View style={styles.seperator}></View>
        <MiniWriting></MiniWriting>
        <View style={styles.seperator}></View>
        <MiniWriting></MiniWriting>
      </View>
    </View>
  );
};

export default LastPublishedWritings;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 14,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
  },
  writingsContainer: {
    marginTop: 12,
  },
  seperator: {
    height: 1,
    backgroundColor: colors.background,
    marginVertical: 20,
  },
});
