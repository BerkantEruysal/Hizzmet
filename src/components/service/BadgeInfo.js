import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BadgeIcon from '../../assets/icons/badgeIcon.svg';
import InfoIcon from '../../assets/icons/infoIcon.svg';
import colors from '../../utils/styles/DarkTheme';
import Badge from './Badge';

const BadgeInfo = ({containerStyle}) => {
  return (
    <View style={[styles.mainContainer, containerStyle]}>
      <View style={styles.topContainer}>
        <BadgeIcon></BadgeIcon>
        <Text style={styles.badgesTitle}>Rozetleri</Text>
        <View style={styles.rightTopContainer}>
          <InfoIcon></InfoIcon>
        </View>
      </View>
      <View style={styles.badgeList}>
        <Badge badgeText={'Letsgooo'}></Badge>
        <Badge badgeText={'Bişeyler Ödülü'}></Badge>
        <Badge badgeText={'Bişeyler Ödülü'}></Badge>
        <Badge badgeText={'Bişeyler Ödülü'}></Badge>
        <Badge badgeText={'Bişeyler Ödülü'}></Badge>
      </View>
    </View>
  );
};

export default BadgeInfo;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightTopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  badgesTitle: {
    fontSize: 14,
    color: colors.secondaryText,
    fontWeight: '600',
    marginLeft: 10,
  },
  badgeList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    gap: 8,
  },
});
