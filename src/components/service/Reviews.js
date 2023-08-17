import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import FullRate from './rate/FullRate';
import colors from '../../utils/styles/DarkTheme';
import SubRateCategory from './rate/SubRateCategory';
import UserReview from './rate/UserReview';

const Reviews = ({containerStyle}) => {
  return (
    <View style={[styles.mainContainer, containerStyle]}>
      <View style={styles.mainRateWrapper}>
        <FullRate rate={2.5}></FullRate>
        <Text style={styles.rateText}>2.5</Text>
      </View>
      <View style={styles.subRateCategoriesWrapper}>
        <SubRateCategory
          rate={3.9}
          title={'Yıldız Kategorisi'}></SubRateCategory>
        <SubRateCategory
          rate={3.2}
          title={'Yıldız Kategorisi'}></SubRateCategory>
      </View>
      <View style={styles.reviewListContainer}>
        <Text style={styles.reviewCount}>98 Yorum</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>Hepsini Gör</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.reviewListWrapper}>
        <UserReview></UserReview>
        <UserReview></UserReview>
        <UserReview></UserReview>
      </View>
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 14,
    marginTop: 12,
    backgroundColor: colors.background,
    paddingVertical: 12,
  },
  mainRateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },
  rateText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '600',
  },
  subRateCategoriesWrapper: {
    marginVertical: 20,
    gap: 10,
  },
  reviewListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  reviewCount: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  seeAllText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  reviewListWrapper: {
    gap: 20,
  },
});
