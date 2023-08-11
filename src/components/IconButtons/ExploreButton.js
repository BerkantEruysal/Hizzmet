import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import DiamondIcon from '../../assets/icons/diamondIcon.svg';

const ExploreButton = ({width = 20, height = 20, color}) => {
  return (
    <TouchableOpacity>
      <DiamondIcon width={width} height={height} style={{color}}></DiamondIcon>
    </TouchableOpacity>
  );
};

export default ExploreButton;

const styles = StyleSheet.create({});
