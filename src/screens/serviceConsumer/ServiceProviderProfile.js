import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  SafeAreaView,
} from 'react-native';
import React, {useRef} from 'react';
import ServiceConsumerExploreProviderHeader from '../../components/headers/ServiceConsumerExploreProviderHeader';
import colors from '../../utils/styles/DarkTheme';
import MiniServiceProvider from '../../components/service/MiniServiceProvider';
import ProfileGallery from '../../components/service/ProfileGallery';
import ProviderProfileNameSection from '../../components/service/ProviderProfileNameSection';
import ExpandableText from '../../components/service/ExpandableText';
import LocationInfo from '../../components/service/LocationInfo';
import BadgeInfo from '../../components/service/BadgeInfo';
import ServiceCategories from '../../components/service/ProfileServiceCategories';
import FrequentlyAskedQuestions from '../../components/service/FrequentlyAskedQuestions';

const ServiceProviderProfile = () => {
  const scrollValue = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollValue}}}],
    {
      useNativeDriver: false, // Native driver doesn't support layout properties like marginLeft
    },
  );

  const profileText =
    'Aradığınız elektrik hizmeti buarada, iöyle iyiyiz böyle tamir ederiz, en  iyisiyiz. Baya da bi iyiyiz haa off ögrmen lazim feci fişek iyiyiz o kadar iyiyiz ki geçen biri iyisiniz dedi cart curt bilmem ne falan filan Aradığınız elektrik hizmeti buarada, iöyle iyiyiz böyle tamir ederiz, en  iyisiyiz. Baya da bi iyiyiz haa off ögrmen lazim feci fişek iyiyiz o kadar iyiyiz ki geçen biri iyisiniz dedi cart curt bilmem ne falan filan';

  return (
    <View style={styles.mainContainer}>
      <ServiceConsumerExploreProviderHeader
        scrollValue={scrollValue}></ServiceConsumerExploreProviderHeader>
      <ScrollView
        contentContainerStyle={styles.scrollStyle}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        <ProfileGallery></ProfileGallery>
        <ProviderProfileNameSection></ProviderProfileNameSection>
        <ExpandableText
          shrinkedTextCount={212}
          text={profileText}
          containerStyle={{
            marginHorizontal: 14,
            marginTop: 12,
          }}></ExpandableText>
        <LocationInfo containerStyle={styles.LocationInfo}></LocationInfo>
        <View style={styles.seperatorLine}></View>
        <BadgeInfo containerStyle={styles.BadgeInfo}></BadgeInfo>
        <View style={styles.seperatorLine}></View>
        <ServiceCategories
          containerStyle={{marginHorizontal: 14}}></ServiceCategories>
        <View style={styles.seperatorLine}></View>
        <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
      </ScrollView>
    </View>
  );
};

export default ServiceProviderProfile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.secondaryBackground,
  },
  LocationInfo: {
    paddingHorizontal: 14,
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.background,
  },
  BadgeInfo: {
    paddingHorizontal: 14,
    marginTop: 12,
  },
  seperatorLine: {
    height: 1,
    backgroundColor: colors.background,
    marginLeft: 30,
    marginTop: 18,
  },
  scrollStyle: {
    paddingBottom: 24,
  },
});
