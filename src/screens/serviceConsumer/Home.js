import {StyleSheet, Text, View, ScrollView, Animated} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import colors from '../../utils/styles/DarkTheme';
import ServiceConsumerHomeHeader from '../../components/headers/ServiceConsumerHomeHeader';
import PopularServices from '../../components/listing/PopularServices';
import ServicesWeChooseForYou from '../../components/service/ServicesWeChooseForYou';
import ShareWithYourFriends from '../../components/ShareWithYourFriends';
import HotProjects from '../../components/listing/HotProjects';
import ViewedProviders from '../../components/listing/ViewedProviders';
import LastPublishedWritings from '../../components/listing/LastPublishedWritings';
import {setHomeScreenScrollValue} from '../../store/AnimationSlice';
import {useDispatch, useSelector} from 'react-redux';

const Home = props => {
  const scrollValue = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollValue}}}],
    {
      useNativeDriver: false, // Native driver doesn't support layout properties like marginLeft
    },
  );

  const handleSearcherPress = () => {
    console.log('scroll value is ', scrollValue._value, 'on home screen');
    props.navigation.navigate('ServiceConsumerExplore', {
      screen: 'Search',
      params: {scrollValue: scrollValue._value},
    });
  };

  return (
    <View style={styles.mainContainer}>
      <ServiceConsumerHomeHeader
        handleSearcherPress={handleSearcherPress}
        scrollValue={scrollValue}></ServiceConsumerHomeHeader>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        <PopularServices style={{marginTop: 40}}></PopularServices>
        <ServicesWeChooseForYou
          style={{marginTop: 40}}></ServicesWeChooseForYou>
        <ShareWithYourFriends style={{marginTop: 40}}></ShareWithYourFriends>
        <HotProjects style={{marginTop: 40}}></HotProjects>
        <ViewedProviders style={{marginTop: 40}}></ViewedProviders>
        <LastPublishedWritings style={{marginTop: 40}}></LastPublishedWritings>
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
