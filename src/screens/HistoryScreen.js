// src/screens/HistoryScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const dummyHistory = [
  { id: '1', dish: '🍕 Margherita Pizza', date: '2024-02-10' },
  { id: '2', dish: '🍔 Cheeseburger', date: '2024-02-08' },
  { id: '3', dish: '🍜 Ramen Noodles', date: '2024-02-05' },
];

const HistoryScreen = () => {
  const [history, setHistory] = useState(dummyHistory);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📜 Order History</Text>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.dish}>{item.dish}</Text>
            <Text style={styles.date}>Ordered on: {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  card: {
    backgroundColor: '#ff6347',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  dish: { fontSize: 18, fontWeight: 'bold', color: 'white' },
  date: { fontSize: 14, color: 'white' },
});

export default HistoryScreen;
