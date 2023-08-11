import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ShareIcon from '../../assets/icons/shareIcon.svg';

const ShareButton = ({width = 20, height = 20}) => {
  return (
    <TouchableOpacity>
      <ShareIcon width={width} height={height}></ShareIcon>
    </TouchableOpacity>
  );
};

export default ShareButton;

const styles = StyleSheet.create({});
