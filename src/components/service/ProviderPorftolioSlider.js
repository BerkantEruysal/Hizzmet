import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import ProviderPorftolioSliderItem from './ProviderPorftolioSliderItem';

const ProviderPorftolioSlider = () => {
  return (
    <Swiper
      showsPagination={false}
      autoplay={true}
      autoplayTimeout={5}
      style={styles.mainContainer}
      nextButton={<Text style={styles.buttonText}>›</Text>}
      prevButton={<Text style={styles.buttonText}>‹</Text>}>
      <ProviderPorftolioSliderItem></ProviderPorftolioSliderItem>
      <ProviderPorftolioSliderItem></ProviderPorftolioSliderItem>
      <ProviderPorftolioSliderItem></ProviderPorftolioSliderItem>
    </Swiper>
  );
};

export default ProviderPorftolioSlider;

const styles = StyleSheet.create({
  mainContainer: {
    height: 200,
  },

  buttonText: {
    fontSize: 50,
    color: 'white',
    fontWeight: '200',
  },
});
