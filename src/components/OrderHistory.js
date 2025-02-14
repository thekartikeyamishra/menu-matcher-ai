import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const OrderHistory = ({ orders }) => {
  return (
    <FlatList
      data={orders}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.text}>🍽️ {item}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#e0e0e0', padding: 10, marginVertical: 5, borderRadius: 5 },
  text: { fontSize: 16 },
});

export default OrderHistory;
