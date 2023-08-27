import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../utils/styles/DarkTheme';
import {useNavigation} from '@react-navigation/native';

const MessageListItem = props => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('ServiceConsumerMessageDetail');
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.mainContainer}>
      <View style={styles.profileImage}></View>
      <View style={styles.messageContainer}>
        <View style={styles.messageHeader}>
          <Text style={styles.messageHeaderName}>{props.name}</Text>
          <Text style={styles.messageHeaderDate}>{props.date}</Text>
        </View>
        <View style={styles.messageBody}>
          <Text style={styles.messageBodyText}>{props.message}</Text>
          <Text style={styles.messageStatus}>{props.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MessageListItem;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
  },
  messageContainer: {
    flex: 1,
    marginLeft: 10,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageHeaderName: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  messageHeaderDate: {
    fontSize: 12,
    color: colors.secondaryText,
  },
  messageBody: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageBodyText: {
    fontSize: 14,
    color: colors.secondaryText,
  },
  messageStatus: {
    fontSize: 12,
    color: colors.primary,
    textAlign: 'right',
  },
});
