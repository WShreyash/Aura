import React from 'react';
import { View, StyleSheet, TextInput,KeyboardAvoidingView,Platform } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function MessageInput() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
        <View style={styles.container}>
          <TextInput
            multiline
            style={styles.input}
            placeholder="Enter Message"
          />
        </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent:'flex-end',
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    flexDirection:'row',
    padding: 10,
  },
  input: {
    height: 40,
    borderWidth: 0.6,
    padding: 10,
    width: '93%',
    borderRadius: 35,
  },
});
