import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LocationIcon from '../../assets/icons/locationIcon.svg';
import colors from '../../utils/styles/DarkTheme';
import MapButton from '../IconButtons/MapButton';

const LocationInfo = ({containerStyle}) => {
  return (
    <View style={[styles.mainContainer, containerStyle]}>
      <LocationIcon style={{color: colors.text}}></LocationIcon>
      <View style={styles.rightSectionContainer}>
        <View style={styles.rightTopContainer}>
          <Text style={styles.locationTitle}>Konum</Text>
          <MapButton color={colors.text}></MapButton>
        </View>
        <Text style={styles.locationText}>
          Eskişehir/ Türkiye / Odunpazarı , Sabanvı Mah, sümer caddesi, no 2
        </Text>
      </View>
    </View>
  );
};

export default LocationInfo;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSectionContainer: {
    flex: 1,
    marginLeft: 12,
  },
  rightTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.secondaryText,
  },
  locationText: {
    fontSize: 14,
    color: colors.text,
    marginTop: 4,
    fontWeight: '600',
  },
});
