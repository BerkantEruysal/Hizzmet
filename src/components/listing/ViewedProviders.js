import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import colors from '../../utils/styles/DarkTheme';
import MiniServiceProvider from '../service/MiniServiceProvider';

const ViewedProviders = ({style}) => {
  return (
    <View style={[style, styles.mainContainer]}>
      <View style={styles.listHeaderContainer}>
        <Text style={styles.headerTitle}>İncelediğiniz hizmetler</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>Tümünü Gör</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal contentContainerStyle={styles.scrollStyle}>
        <MiniServiceProvider></MiniServiceProvider>
        <MiniServiceProvider></MiniServiceProvider>
        <MiniServiceProvider></MiniServiceProvider>
        <MiniServiceProvider></MiniServiceProvider>
      </ScrollView>
    </View>
  );
};

export default ViewedProviders;

const styles = StyleSheet.create({
  mainContainer: {},
  listHeaderContainer: {
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
  },
  seeAllText: {
    color: colors.primary,
  },
  scrollStyle: {
    paddingHorizontal: 14,
    marginTop: 21,
    gap: 28,
  },
});
