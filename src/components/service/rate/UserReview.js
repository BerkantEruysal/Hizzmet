import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import ConsumerProfileImage from '../../consumer/ConsumerProfileImage';
import UserReviewImage from './UserReviewImage';
import colors from '../../../utils/styles/DarkTheme';

const UserReview = () => {
  return (
    <View>
      <View style={styles.userInfoWrapper}>
        <ConsumerProfileImage></ConsumerProfileImage>
        <Text style={styles.ownerName}>Yorum sahibi</Text>
        <View style={styles.reviewStarWrapper}>
          <Text style={styles.rateText}>2.5</Text>
          <Image source={require('../../../assets/icons/starIcon.png')}></Image>
        </View>
      </View>
      <Text style={styles.comment}>
        Yorum yazisi yorum yazisi 222831 222831222831 222831 222831 222831
        222831 222831
      </Text>
      <View style={styles.reviewImageList}>
        <UserReviewImage></UserReviewImage>
        <UserReviewImage></UserReviewImage>
      </View>
      <Text style={styles.reviewDate}>2 ay önce</Text>
    </View>
  );
};

export default UserReview;

const styles = StyleSheet.create({
  userInfoWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  ownerName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  comment: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
    marginTop: 10,
  },
  reviewImageList: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  reviewDate: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.secondaryText,
    marginTop: 10,
  },
  reviewStarWrapper: {
    flexDirection: 'row',
    gap: 5,
    marginLeft: 'auto',
    alignItems: 'baseline',
  },
  rateText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
});
