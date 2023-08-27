import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ServiceConsumerMessageDetailHeader from '../../components/headers/ServiceConsumerMessageDetailHeader';

const MessageDetail = () => {
  return (
    <View style={styles.mainContainer}>
      <ServiceConsumerMessageDetailHeader></ServiceConsumerMessageDetailHeader>
    </View>
  );
};

export default MessageDetail;

const styles = StyleSheet.create({});
