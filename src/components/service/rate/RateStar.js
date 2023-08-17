import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const RateStar = ({status, width = 16, height = 16}) => {
  return (
    <View>
      {status == 'full' ? (
        <Image
          style={{width, height}}
          source={require('../../../assets/icons/starIcon.png')}></Image>
      ) : status === 'half' ? (
        <Image
          style={{width, height}}
          source={require('../../../assets/icons/halfStarIcon.png')}></Image>
      ) : (
        <Image
          style={{width, height}}
          source={require('../../../assets/icons/emptyStarIcon.png')}></Image>
      )}
    </View>
  );
};

export default RateStar;

const styles = StyleSheet.create({});
