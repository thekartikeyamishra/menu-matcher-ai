import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DishCard = ({ dish }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: dish.image }} style={styles.image} />
      <Text style={styles.title}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 10, padding: 10, margin: 10, alignItems: 'center' },
  image: { width: 150, height: 150, borderRadius: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  description: { fontSize: 14, color: '#666', marginTop: 5 },
});

export default DishCard;
