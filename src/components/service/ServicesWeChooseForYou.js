import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import colors from '../../utils/styles/DarkTheme';

const ServicesWeChooseForYou = ({style}) => {
  return (
    <View style={[style, styles.mainContainer]}>
      <View style={styles.topPartWrapper}>
        <Image
          style={styles.image}
          source={require('../../assets/tempImages/2.png')}></Image>
      </View>
      <View style={styles.bottomPartWrapper}>
        <Text style={styles.chosedForYouText}>
          Senin için seçtiğimiz, yüksek puan alan hizmetlere göz at
        </Text>
      </View>
      <View style={styles.madeWithHizzmetWrapper}>
        <Text style={styles.madeWithHizzmetText}>Hızzmet'de yapıldı</Text>
      </View>
    </View>
  );
};

export default ServicesWeChooseForYou;

const styles = StyleSheet.create({
  mainContainer: {marginHorizontal: 14, backgroundColor: colors.background},
  topPartWrapper: {width: '100%'},
  image: {
    width: '100%',
  },
  bottomPartWrapper: {
    marginTop: 15,
    paddingHorizontal: 6,
    paddingBottom: 15,
  },
  chosedForYouText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
  },
  madeWithHizzmetWrapper: {
    position: 'absolute',
    top: 12,
    left: 7,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 6,
  },
  madeWithHizzmetText: {
    color: colors.text,
    fontSize: 12,
  },
});
