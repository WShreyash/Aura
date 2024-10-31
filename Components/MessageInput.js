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
      placeholderTextColor={'#acacb0'}
      color={'white'}
      keyboardAppearance='dark'
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 16,
    borderRadius: 35,
    padding: 13,
    backgroundColor: '#2f2f2f'

  },
});
