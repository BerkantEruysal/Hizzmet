import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ProfileServiceCategory from './ProfileServiceCategory';
import colors from '../../utils/styles/DarkTheme';

const ProfileServiceCategories = ({containerStyle}) => {
  return (
    <View style={[styles.mainContainer, containerStyle]}>
      <Text style={styles.servicesTitle}>Hizmet Kategorileri</Text>
      <View style={styles.categoryListContainer}>
        <ProfileServiceCategory></ProfileServiceCategory>
        <ProfileServiceCategory></ProfileServiceCategory>
        <ProfileServiceCategory></ProfileServiceCategory>
      </View>
      <TouchableOpacity style={styles.seeAllWrapper}>
        <Text style={styles.seeAllText}>Diğer 29 hizmeti gör</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileServiceCategories;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 24,
  },
  servicesTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  categoryListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    marginBottom: 10,
    gap: 8,
  },
  seeAllWrapper: {
    marginTop: 8,
  },
  seeAllText: {
    fontSize: 14,
    color: colors.primary,
  },
});
