import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MessageInput from './Components/MessageInput';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { MessageItem } from './Components/MessageItem';
import Animated, { CurvedTransition, Easing } from 'react-native-reanimated';

export default function App() {

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState();
  const addMessage = () => {
    setMessages([text, ...messages])
    setText('');
  };

  const onChangeText = (txt) => {
    setText(txt)
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.messageView} >
          <Animated.FlatList data={messages}
            contentContainerStyle={{ gap: 12, paddingHorizontal: 12, paddingTop:12 }}
            keyExtractor={(item, index) => index}
            itemLayoutAnimation={CurvedTransition.duration(450).easingY(Easing.bezier(0.05, 0.7, 0.1, 1))}
            renderItem={({ item }) => <MessageItem title={item} />
            } />
        </View>
        <View style={styles.bottomView}>
          <MessageInput text={text} onChangeText={onChangeText} />
          <TouchableOpacity
            style={{ backgroundColor: '#000', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 24 }}
            onPress={addMessage}>
            <Text style={{ color: 'white' }}>Send</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageView: {
    flex: 1,
  },
  bottomView: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    alignItems: 'center'
  }
});