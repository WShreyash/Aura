import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MessageInput from './Components/MessageInput';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MessageInput /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-end',
    alignItems:'',
  },
});