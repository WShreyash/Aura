import React from 'react';
import { StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

export default function MessageInput({ text, onChangeText }) {
  return (
    <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TextInput
        onChangeText={(text) => onChangeText(text)}
        value={text}
        multiline
        numberOfLines={1}
        style={styles.input}
        placeholder="Enter Message"
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 46,
    borderWidth: 1.6,
    borderColor: '#888',
    paddingHorizontal: 16,
    borderRadius: 35,
  },
});
