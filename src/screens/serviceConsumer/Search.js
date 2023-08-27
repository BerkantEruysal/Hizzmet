import {StyleSheet, Text, View, Animated, ScrollView} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import ServiceConsumerSearchHeader from '../../components/headers/ServiceConsumerSearchHeader';
import colors from '../../utils/styles/DarkTheme';
import SearchHistory from '../../components/search/SearchHistory';

const Search = props => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const changeListCategory = index => {
    setSelectedCategoryIndex(index);
  };
  return (
    <View style={styles.mainContainer}>
      <ServiceConsumerSearchHeader
        changeListCategory={changeListCategory}
        activeCategoryIndex={selectedCategoryIndex}
        navigation={props.navigation}></ServiceConsumerSearchHeader>
      <ScrollView>
        <SearchHistory
          activeCategoryIndex={selectedCategoryIndex}></SearchHistory>
      </ScrollView>
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
