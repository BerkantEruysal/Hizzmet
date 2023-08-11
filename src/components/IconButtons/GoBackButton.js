import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import GoBackIcon from '../../assets/icons/goBackIcon.svg';

const GoBackButton = ({width = 20, height = 20}) => {
  return (
    <TouchableOpacity>
      <GoBackIcon></GoBackIcon>
    </TouchableOpacity>
  );
};

export default GoBackButton;

const styles = StyleSheet.create({});
