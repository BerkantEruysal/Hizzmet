import {StyleSheet, Text, View, ScrollView, Animated} from 'react-native';
import React, {useState, useRef} from 'react';
import colors from '../../utils/styles/DarkTheme';
import ServiceConsumerHomeHeader from '../../components/headers/ServiceConsumerHomeHeader';
import PopularServices from '../../components/listing/PopularServices';
import ServicesWeChooseForYou from '../../components/service/ServicesWeChooseForYou';
import ShareWithYourFriends from '../../components/ShareWithYourFriends';

const Home = () => {
  const scrollValue = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollValue}}}],
    {
      useNativeDriver: false, // Native driver doesn't support layout properties like marginLeft
    },
  );

  return (
    <View style={styles.mainContainer}>
      <ServiceConsumerHomeHeader
        scrollValue={scrollValue}></ServiceConsumerHomeHeader>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        <PopularServices style={{marginTop: 40}}></PopularServices>
        <ServicesWeChooseForYou
          style={{marginTop: 40}}></ServicesWeChooseForYou>
        <ShareWithYourFriends style={{marginTop: 40}}></ShareWithYourFriends>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.secondaryBackground,
  },
  scrollView: {
    paddingBottom: 30,
  },
});
