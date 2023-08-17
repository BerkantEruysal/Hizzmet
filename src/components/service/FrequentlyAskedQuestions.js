import {StyleSheet, Text, View, Pressable, Animated} from 'react-native';
import React, {useState, useRef} from 'react';

import UpArrowIcon from '../../assets/icons/upArrowIcon.svg';
import colors from '../../utils/styles/DarkTheme';
import FAQQuestion from './FAQQuestion';

const FrequentlyAskedQuestions = ({containerStyle}) => {
  const [isFQQOpen, setIsFQQOpen] = useState(false);

  //create an animation to rotate the arrow
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    setIsFQQOpen(!isFQQOpen);
    Animated.timing(rotateAnim, {
      toValue: isFQQOpen ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={[styles.mainContainer, containerStyle]}>
      <Pressable onPress={handlePress} style={styles.fqqHeader}>
        <Text style={styles.fqqText}>Sık sorulan sorular</Text>
        <Animated.View style={styles.upArrowWrapper(rotateAnim)}>
          <UpArrowIcon color={colors.text}></UpArrowIcon>
        </Animated.View>
      </Pressable>
      {isFQQOpen && (
        <View style={styles.questionList}>
          <FAQQuestion></FAQQuestion>
          <FAQQuestion></FAQQuestion>
          <FAQQuestion></FAQQuestion>
        </View>
      )}
    </View>
  );
};

export default FrequentlyAskedQuestions;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.background,
    paddingVertical: 16,
  },
  fqqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  fqqText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  questionList: {
    marginTop: 16,
    paddingHorizontal: 14,
    gap: 10,
  },
  upArrowWrapper: rotateAnim => ({
    transform: [
      {
        rotate: rotateAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '180deg'],
        }),
      },
    ],
  }),
});
