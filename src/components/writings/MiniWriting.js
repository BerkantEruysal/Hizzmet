import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import colors from '../../utils/styles/DarkTheme';
import Category from '../service/Category';

const MiniWriting = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftPartContainer}>
        <Text style={styles.publishDate}>20 saat önce</Text>
        <Text style={styles.title}>
          Akıllı ev teknolojileri, yaşam kalitenizi arttıracak
        </Text>
        <View style={styles.categoryContainer}>
          <Category></Category>
          <Category></Category>
          <View style={styles.categoryCountWrapper}>
            <Text style={styles.categoryCountText}>+5</Text>
          </View>
        </View>
      </View>
      <View style={styles.rightPartContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/tempImages/1.png')}></Image>
      </View>
    </View>
  );
};

export default MiniWriting;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  publishDate: {
    fontSize: 12,
    color: colors.secondaryText,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginTop: 3,
  },
  leftPartContainer: {
    width: '60%',
  },
  rightPartContainer: {
    width: '40%',
    minWidth: 72,
    alignItems: 'flex-end',
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 6,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 23,
    gap: 10,
  },
  categoryCountWrapper: {
    width: 27,
    height: 27,
    borderRadius: 27,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryCountText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
  },
});
