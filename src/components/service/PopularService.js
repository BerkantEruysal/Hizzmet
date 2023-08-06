import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../utils/styles/DarkTheme';

const PopularService = () => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <View>
        <View style={styles.topPartWrapper}>
          <Image
            style={styles.serviceImage}
            source={require('../../assets/tempImages/1.png')}></Image>
        </View>
        <View style={styles.bottomPartWrapper}>
          <Text style={styles.serviceText}>İç/Dış Boyama</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularService;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.background,
    height: 170,
    width: 130,
    borderRadius: 6,
  },
  topPartWrapper: {
    height: '50%',
  },
  bottomPartWrapper: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceImage: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  serviceText: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '500',
  },
});
