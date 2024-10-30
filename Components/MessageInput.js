import React from 'react';
import { StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

export default function MessageInput({ text, onChangeText }) {
  return (
  
      <TextInput
        onChangeText={(text) => onChangeText(text)}
        value={text}
        multiline
        numberOfLines={1}
        style={styles.input}
        placeholder="Enter Message"
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flex:1,
    height: 40,
    borderWidth: 1.6,
    borderColor: '#888',
    paddingHorizontal: 16,
    borderRadius: 35,
    padding:13,
  },
});
