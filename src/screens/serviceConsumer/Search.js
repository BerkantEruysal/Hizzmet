import {StyleSheet, Text, View, Animated} from 'react-native';
import React, {useRef, useEffect} from 'react';

import ServiceConsumerSearchHeader from '../../components/headers/ServiceConsumerSearchHeader';
import colors from '../../utils/styles/DarkTheme';

const Search = props => {
  return (
    <View style={styles.mainContainer}>
      <ServiceConsumerSearchHeader
        navigation={props.navigation}></ServiceConsumerSearchHeader>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.secondaryBackground,
  },
});
