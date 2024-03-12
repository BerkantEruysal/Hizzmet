import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import GoBackIcon from '../../assets/icons/goBackIcon.svg';
import CallIcon from '../../assets/icons/callIcon.svg';
import colors from '../../utils/styles/DarkTheme';
import {useNavigation} from '@react-navigation/native';

const ServiceConsumerMessageDetailHeader = props => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <View style={styles.mainWrapper}>
          <TouchableOpacity onPress={goBack}>
            <GoBackIcon></GoBackIcon>
          </TouchableOpacity>
          <View style={styles.middlePartContainer}>
            <Text style={styles.nameText}>Kardeşler Elektrik</Text>
            <Text style={styles.tagText}>@kardeşlerElektrik</Text>
          </View>
          <CallIcon></CallIcon>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ServiceConsumerMessageDetailHeader;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.background,
  },
  mainWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  middlePartContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  nameText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '600',
  },
  tagText: {
    color: colors.secondaryText,
    fontSize: 15,
  },
});
