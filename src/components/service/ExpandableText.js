import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import colors from '../../utils/styles/DarkTheme';

const ExpandableText = ({
  textStyle = styles.textStyle,
  text,
  containerStyle,
  shrinkedTextCount = 200,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isBiggerThanShrinkedTextCount, setIsBiggerThanShrinkedTextCount] =
    useState(false);
  const [showedText, setShowedText] = useState('');

  useEffect(() => {
    if (text.length > shrinkedTextCount) {
      setIsBiggerThanShrinkedTextCount(true);
      setShowedText(text.substring(0, shrinkedTextCount));
      return;
    }
    setShowedText(text);
  }, [text]);

  handlePress = () => {
    if (isBiggerThanShrinkedTextCount) {
      setIsExpanded(!isExpanded);
      setShowedText(isExpanded ? text.substring(0, shrinkedTextCount) : text);
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      style={[containerStyle, styles.mainContainer]}>
      <Text style={textStyle}>
        {showedText}
        {!isExpanded && isBiggerThanShrinkedTextCount ? '...' : ''}
      </Text>
      {isBiggerThanShrinkedTextCount && (
        <Text style={styles.moreText}>
          {isExpanded ? 'Daha Az' : 'Daha Fazla'}
        </Text>
      )}
    </Pressable>
  );
};

export default ExpandableText;

const styles = StyleSheet.create({
  mainContainer: {},
  textStyle: {
    color: colors.lightGrey,
    fontSize: 14,
    fontWeight: '600',
  },
  moreText: {
    color: colors.primary,
  },
});
