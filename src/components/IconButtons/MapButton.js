import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import MapLogo from '../../assets/icons/mapIcon.svg';
import colors from '../../utils/styles/DarkTheme';

const MapButton = ({width = 20, height = 20, color = colors.primary}) => {
  return (
    <TouchableOpacity>
      <MapLogo width={width} height={height} color={color}></MapLogo>
    </TouchableOpacity>
  );
};

export default MapButton;

const styles = StyleSheet.create({});
