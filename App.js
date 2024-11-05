import React, { useState } from 'react';
import {TextInput, Platform, FlatList, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MessageInput from './Components/MessageInput';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { MessageItem } from './Components/MessageItem';
import { Microphone } from './Components/Microphone';

export default function App() {

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState();
  const addMessage = () => {
    setMessages([...messages, text])
    setText('');
  };



  const onChangeText = (txt) => {
    setText(txt);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.container1}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.messageView} >
            <FlatList data={messages}
              contentContainerStyle={{ gap: 12, paddingHorizontal: 12, paddingTop: 12 }}
              keyExtractor={(item, index) => index}
              renderItem={({ item }) => <MessageItem title={item} />
            } />
          </View>
          <View style={styles.bottomView}>
            <MessageInput text={text} onChangeText={onChangeText} />
            <Microphone />
            <TouchableOpacity
              style={{ backgroundColor: '#2f2f2f', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 24 }}
              onPress={addMessage}>
              <Text style={{ color: 'white' }}>Send</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121'
  },
  container1: {
    flex: 1,
  },
  messageView: {
    flex: 1,
  },
  bottomView: {
    flexDirection: 'row',
    gap: 12,
    padding: 11,
    alignItems: 'center'
  }
});