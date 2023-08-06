import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import colors from '../../utils/styles/DarkTheme';
import PopularService from '../service/PopularService';

const PopularServices = ({style}) => {
  return (
    <View style={[styles.mainContainer, style]}>
      <View style={styles.listHeaderContainer}>
        <Text style={styles.popularServicesText}>Popüler hizmetler</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>Tümünü Gör</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.horizontalList} horizontal>
        <PopularService></PopularService>
        <PopularService></PopularService>
        <PopularService></PopularService>
        <PopularService></PopularService>
      </ScrollView>
    </View>
  );
};

export default PopularServices;

const styles = StyleSheet.create({
  mainContainer: {},
  popularServicesText: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '600',
  },
  listHeaderContainer: {
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeAllText: {
    color: colors.primary,
  },
  horizontalList: {
    gap: 11,
    marginTop: 14,
    paddingLeft: 14,
  },
});
