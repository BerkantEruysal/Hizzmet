import {StyleSheet, Text, View, ScrollView, Animated} from 'react-native';
import React, {useState, useRef} from 'react';
import colors from '../../utils/styles/DarkTheme';
import ServiceConsumerHomeHeader from '../../components/headers/ServiceConsumerHomeHeader';

const Home = () => {
  const scrollValue = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollValue}}}],
    {
      useNativeDriver: false, // Native driver doesn't support layout properties like marginLeft
    },
  );

  const placeholder = [];
  for (let i = 0; i < 100; i++) {
    placeholder.push(
      <Text key={i} style={{color: 'white'}}>
        Home {i}
      </Text>,
    );
  }

  return (
    <View style={styles.mainContainer}>
      <ServiceConsumerHomeHeader
        scrollValue={scrollValue}></ServiceConsumerHomeHeader>
      <ScrollView
        style={styles.scrollView}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        {placeholder}
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
    flex: 1,
  },
});
