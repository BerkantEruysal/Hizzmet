import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import colors from '../utils/styles/DarkTheme';
import RightArrowIcon from '../assets/icons/rightArrowIcon.svg';

const ShareWithYourFriends = ({style}) => {
  return (
    <View style={[styles.mainContainer, style]}>
      <Text style={styles.mainTitle}>
        Arkadaşlarını davet et ve 250 tl ye kadar indirim kazan
      </Text>
      <Text style={styles.explanationText}>
        Hem arkadaşların, hem de kendine 10% indirim kuponu kazandır
      </Text>
      <Pressable style={styles.shareBtnWrapper}>
        <Text style={styles.shareText}>Arkadaşlarını Davet Et</Text>
        <RightArrowIcon></RightArrowIcon>
      </Pressable>
    </View>
  );
};

export default ShareWithYourFriends;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 14,
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 27,
    borderRadius: 6,
  },
  mainTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  explanationText: {
    color: colors.text,
    fontSize: 12,
    marginTop: 4,
  },
  shareBtnWrapper: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 18,
    alignItems: 'center',
  },
  shareText: {
    color: colors.text,
    fontWeight: 'bold',
  },
});
