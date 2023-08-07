import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import colors from '../../utils/styles/DarkTheme';
import HotProject from '../service/HotProject';

const HotProjects = ({style}) => {
  return (
    <View style={[styles.mainContainer, style]}>
      <View style={styles.listHeader}>
        <Text style={styles.headerText}>
          Hızzmet ile hayata geçmiş ilgi çekici projeler
        </Text>
        <TouchableOpacity>
          <Text style={styles.moreText}>Daha fazla </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal contentContainerStyle={styles.listStyle}>
        <View style={styles.scrollListInnerWrapper}>
          <View style={styles.scrollListTopView}>
            <HotProject
              image={require('../../assets/tempImages/3.png')}></HotProject>
            <HotProject
              image={require('../../assets/tempImages/1.png')}></HotProject>
            <HotProject
              image={require('../../assets/tempImages/4.png')}></HotProject>
            <HotProject
              image={require('../../assets/tempImages/3.png')}></HotProject>
          </View>
          <View style={styles.scrollListBottomView}>
            <HotProject
              image={require('../../assets/tempImages/1.png')}></HotProject>
            <HotProject
              image={require('../../assets/tempImages/3.png')}></HotProject>
            <HotProject
              image={require('../../assets/tempImages/4.png')}></HotProject>
            <HotProject
              image={require('../../assets/tempImages/3.png')}></HotProject>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HotProjects;

const styles = StyleSheet.create({
  mainContainer: {},
  listHeader: {
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: colors.text,
    fontSize: 20,
    fontWeight: 'bold',
    maxWidth: '70%',
  },
  moreText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: 'bold',
  },
  listStyle: {
    marginLeft: 14,
    marginTop: 20,
  },
  scrollListBottomView: {
    flexDirection: 'row',
    gap: 13,
  },
  scrollListTopView: {
    flexDirection: 'row',
    gap: 13,
  },
  scrollListInnerWrapper: {
    gap: 13,
  },
});
