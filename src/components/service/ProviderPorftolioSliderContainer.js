import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../utils/styles/DarkTheme';
import ProviderPorftolioSlider from './ProviderPorftolioSlider';

const ProviderPorftolioSliderContainer = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topPartContainer}>
        <Text style={styles.providerPorftolioText}>İşletme Porftolyosu</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>Tümünü Gör</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sliderWrapper}>
        <ProviderPorftolioSlider></ProviderPorftolioSlider>
      </View>
    </View>
  );
};

export default ProviderPorftolioSliderContainer;

const styles = StyleSheet.create({
  mainContainer: {},

  providerPorftolioText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
    marginHorizontal: 14,
  },
  topPartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    paddingHorizontal: 14,
    marginBottom: 12,
  },
});
