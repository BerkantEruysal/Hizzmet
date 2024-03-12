import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useRef} from 'react';
import ServiceConsumerMessageDetailHeader from '../../components/headers/ServiceConsumerMessageDetailHeader';
import colors from '../../utils/styles/DarkTheme';
import AttachmentIcon from '../../assets/icons/attachmentIcon.svg';

const MessageDetail = () => {
  const inputRef = useRef(null);
  return (
    <View style={styles.mainContainer}>
      <ServiceConsumerMessageDetailHeader></ServiceConsumerMessageDetailHeader>
      <Pressable
        style={styles.messageList}
        onPress={() => {
          inputRef.current.blur();
        }}></Pressable>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.bottomContainer}>
        <SafeAreaView>
          <View style={styles.bottomInnerContainer}>
            <TextInput
              numberOfLines={4}
              style={styles.textInput}
              placeholderTextColor={colors.secondaryText}
              ref={inputRef}
              multiline
              placeholder="Mesajınızı girin..."></TextInput>
            <View style={styles.attachmentAndSendWrapper}>
              <AttachmentIcon></AttachmentIcon>
              <TouchableOpacity>
                <Text style={styles.sendText}>Gönder</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default MessageDetail;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.secondaryBackground,
  },
  bottomContainer: {
    backgroundColor: colors.background,
    paddingTop: 15,
  },
  sendText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  messageList: {
    flex: 1,
  },
  bottomInnerContainer: {
    paddingHorizontal: 15,
    gap: 10,
    paddingBottom: 15,
  },
  attachmentAndSendWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    color: colors.text,
    maxHeight: 100,
  },
});
