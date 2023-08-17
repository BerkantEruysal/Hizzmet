import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProviderPorftolioSliderItem = () => {
  return (
    <View style={styles.slideElementContainer}>
      <View style={styles.dateTextWrapper}>
        <Text style={styles.dateText}>5 gün önce</Text>
      </View>
      <View style={styles.serviceTextWrapper}>
        <Text style={styles.serviceText}>Duvara resim işleme</Text>
      </View>
      <View style={styles.explanationTextWrapper}>
        <Text style={styles.explanationText}>
          Duvara şöyle böyle yapılmış olup şu tekniklerle bu görünüm elde
          edilmiştir. O yüzden baya güzel olmuştur. Herkese tavsiye edilir falan
          filan. asd dsaa sasd dsd gjr lorem ipsum dolor sit amet slek flef....
        </Text>
      </View>
    </View>
  );
};

export default ProviderPorftolioSliderItem;

const styles = StyleSheet.create({
  slideElementContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    height: 200,
    borderRadius: 6,
    marginHorizontal: 8,
  },
  dateTextWrapper: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  dateText: {
    color: 'white',
    fontSize: 14,
  },
  serviceTextWrapper: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  serviceText: {
    color: 'white',
    fontSize: 14,
  },
  imageCountTextWrapper: {
    position: 'absolute',
    top: 36,
    left: 8,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  imageCountText: {
    color: 'white',
    fontSize: 14,
  },
  counterTextWrapper: {
    position: 'absolute',
    bottom: 54,
    right: 4,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  counterText: {
    color: 'white',
    fontSize: 14,
  },
  explanationTextWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  explanationText: {
    color: 'white',
    fontSize: 14,
  },
});
