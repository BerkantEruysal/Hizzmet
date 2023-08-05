import {StyleSheet, View, Image} from 'react-native';
import React from 'react';

const FullLogo = ({aditionalStyle}) => {
  return (
    <View style={[aditionalStyle]}>
      <Image source={require('../../assets/logo/FullLogoWhite.png')}></Image>
    </View>
  );
};

export default FullLogo;

const styles = StyleSheet.create({});
