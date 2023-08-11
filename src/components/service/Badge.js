import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TempBadge from '../../assets/tempImages/tempBadge.svg';
import colors from '../../utils/styles/DarkTheme';

const Badge = ({badgeText}) => {
  return (
    <View style={styles.mainContainer}>
      <TempBadge></TempBadge>
      <Text style={styles.badgeName}>{badgeText}</Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: colors.text,
    borderRadius: 30,
  },
  badgeName: {
    fontSize: 14,
    color: colors.text,
    marginLeft: 4,
    fontWeight: '600',
  },
});
