// src/components/MoodSelector.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const moods = [
  { emoji: "😃", label: "Happy" },
  { emoji: "😔", label: "Sad" },
  { emoji: "🤩", label: "Excited" },
  { emoji: "😡", label: "Angry" },
  { emoji: "😴", label: "Tired" }
];

const MoodSelector = ({ setMood }) => {
  return (
    <View style={styles.container}>
      {moods.map((m, index) => (
        <TouchableOpacity key={index} style={styles.mood} onPress={() => setMood(m.label)}>
          <Text style={styles.emoji}>{m.emoji}</Text>
          <Text style={styles.label}>{m.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
  mood: { alignItems: 'center', marginHorizontal: 10 },
  emoji: { fontSize: 24 },
  label: { fontSize: 14, marginTop: 5 }
});

export default MoodSelector;
