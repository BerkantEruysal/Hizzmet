import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import CallIcon from '../../assets/icons/callIcon.svg';

const CallButton = ({width = 20, height = 20}) => {
  return (
    <TouchableOpacity>
      <CallIcon width={width} height={height}></CallIcon>
    </TouchableOpacity>
  );
};

export default CallButton;

const styles = StyleSheet.create({});
