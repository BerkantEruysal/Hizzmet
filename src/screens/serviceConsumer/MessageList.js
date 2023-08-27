import {StyleSheet, Text, View, SafeAreaView, SectionList} from 'react-native';
import React from 'react';
import colors from '../../utils/styles/DarkTheme';
import MessageListItem from '../../components/message/MessageListItem';

const MessageList = () => {
  const DATA = [
    {
      title: 'A',
      data: [
        {
          name: 'Ali',
          message: 'Merhaba',
          date: '12:00',
          status: 'Okundu',
        },
        {
          name: 'Ayşe',
          message: 'Merhaba',
          date: '12:00',
          status: 'Okundu',
        },
        {
          name: 'Berk',
          message: 'Merhaba',
          date: '12:00',
          status: 'İletildi',
        },
        {
          name: 'Buse',
          message: 'Merhaba',
          date: '12:00',
          status: 'Okundu',
        },
      ],
    },
  ];
  const renderMessage = ({item}) => {
    return (
      <MessageListItem
        name={item.name}
        message={item.message}
        date={item.date}
        status={item.status}></MessageListItem>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.headerSafeWrapper}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Mesajlar</Text>
        </View>
      </SafeAreaView>
      <SectionList
        ItemSeparatorComponent={() => {
          return <View style={styles.seperator}></View>;
        }}
        sections={DATA}
        renderItem={renderMessage}></SectionList>
    </View>
  );
};

export default MessageList;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.secondaryBackground,
  },
  header: {
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 5,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  headerSafeWrapper: {
    backgroundColor: colors.background,
  },
  seperator: {
    height: 1,
    backgroundColor: colors.background,
    marginLeft: 70,
    marginRight: 10,
  },
});
