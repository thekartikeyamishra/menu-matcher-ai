// src/screens/ChatScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { fetchChatResponse } from '../utils/openai';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { id: messages.length + 1, text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);

    setInput('');
    
    const botReply = await fetchChatResponse(input);
    const botMessage = { id: messages.length + 2, text: botReply, sender: 'bot' };
    
    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🤖 Chat with Menu Matcher</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.message, item.sender === 'user' ? styles.userMessage : styles.botMessage]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={input} onChangeText={setInput} placeholder="Ask something..." />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendText}>➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  message: { padding: 10, borderRadius: 8, marginVertical: 5 },
  userMessage: { alignSelf: 'flex-end', backgroundColor: '#ff6347' },
  botMessage: { alignSelf: 'flex-start', backgroundColor: '#f1f1f1' },
  messageText: { fontSize: 16 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', padding: 10 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10 },
  sendButton: { backgroundColor: '#ff6347', padding: 10, borderRadius: 5, marginLeft: 10 },
  sendText: { fontSize: 18, color: 'white' },
});

export default ChatScreen;
