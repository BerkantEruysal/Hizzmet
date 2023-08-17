import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RateStar from './RateStar';

const FullRate = ({rate}) => {
  const rateStar = [];
  //I want stars to be if rate is 3.5 , 3 full 1 half and 1 empty
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rate)) {
      rateStar.push(<RateStar key={i} status="full"></RateStar>);
    } else if (i === Math.floor(rate)) {
      if (rate % 1 === 0) {
        rateStar.push(<RateStar key={i} status="empty"></RateStar>);
      } else {
        rateStar.push(<RateStar key={i} status="half"></RateStar>);
      }
    } else {
      rateStar.push(<RateStar key={i} status="empty"></RateStar>);
    }
  }

  return <View style={styles.mainContainer}>{rateStar}</View>;
};

export default FullRate;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    width: 16,
    height: 16,
  },
});
