import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../utils/styles/DarkTheme';
import SearchHistoryItem from './SearchHistoryItem';

const SearchHistory = props => {
  const mockCategoryHistory = [
    {
      id: 1,
      name: 'Kategori 1',
    },
    {
      id: 2,
      name: 'Kategori 2',
    },
    {
      id: 3,
      name: 'Kategori 3',
    },
    {
      id: 4,
      name: 'Kategori 4',
    },
    {
      id: 5,
      name: 'Kategori 5',
    },
  ];
  const mockServiceProviderHistory = [
    {
      id: 1,
      name: 'Hizmet Sağlayıcı 1',
    },
    {
      id: 2,
      name: 'Hizmet Sağlayıcı 2',
    },
    {
      id: 3,
      name: 'Hizmet Sağlayıcı 3',
    },
    {
      id: 4,
      name: 'Hizmet Sağlayıcı 4',
    },
  ];
  const [searchHistoryElements, setSearchHistoryElements] = useState([]);

  useEffect(() => {
    if (props.activeCategoryIndex == 0) {
      setSearchHistoryElements(
        mockCategoryHistory.map((category, index) => {
          return (
            <>
              <SearchHistoryItem
                key={category.id}
                name={category.name}
                activeCategoryIndex={
                  props.activeCategoryIndex
                }></SearchHistoryItem>
              {index != mockCategoryHistory.length - 1 ? (
                <View
                  key={category.id + 'seperator'}
                  style={{
                    borderBottomColor: colors.secondaryBackground,
                    borderBottomWidth: 1,
                  }}></View>
              ) : null}
            </>
          );
        }),
      );
    } else {
      setSearchHistoryElements(
        mockServiceProviderHistory.map((serviceProvider, index) => {
          return (
            <>
              <SearchHistoryItem
                key={serviceProvider.id}
                name={serviceProvider.name}
                activeCategoryIndex={
                  props.activeCategoryIndex
                }></SearchHistoryItem>
              {index != mockCategoryHistory.length - 1 ? (
                <View
                  key={serviceProvider.id + 'seperator'}
                  style={{
                    borderBottomColor: colors.secondaryBackground,
                    borderBottomWidth: 1,
                  }}></View>
              ) : null}
            </>
          );
        }),
      );
    }
  }, [props.activeCategoryIndex]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {props.activeCategoryIndex == 0 ? 'Kategori' : 'Hizmet Sağlayıcı'}{' '}
          Arama Geçmişi
        </Text>
        <TouchableOpacity>
          <Text style={styles.clearHistoryText}>Geçmişi Temizle</Text>
        </TouchableOpacity>
      </View>
      {searchHistoryElements.map((Element, index) => {
        return Element;
      })}
    </View>
  );
};

export default SearchHistory;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 14,
    color: colors.secondaryText,
    fontWeight: '600',
  },
  clearHistoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  mainContainer: {
    paddingTop: 10,
  },
});
