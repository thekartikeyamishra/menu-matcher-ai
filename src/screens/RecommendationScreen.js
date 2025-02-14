// src/screens/RecommendationScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import { getDishRecommendations } from '../utils/openai';
import LottieView from 'lottie-react-native';

const RecommendationScreen = () => {
  const [mood, setMood] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRecommendation = async () => {
    if (!mood.trim()) {
      setResponse("⚠️ Please enter your mood first!");
      return;
    }

    setLoading(true);
    const result = await getDishRecommendations(mood);
    setResponse(result);
    setLoading(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LottieView
        source={require('../../assets/food.json')} // Ensure this exists
        autoPlay
        loop
        style={styles.animation}
      />

      <Text style={styles.heading}>🍽️ Mood-Based Dish Recommendations</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your mood (e.g., Happy, Sad, Excited)"
        value={mood}
        onChangeText={setMood}
      />

      <TouchableOpacity style={styles.button} onPress={handleRecommendation}>
        <Text style={styles.buttonText}>🍲 Get Dish Recommendation</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="#ff5733" style={styles.loader} />
      ) : (
        <Text style={styles.response}>{response}</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  animation: { height: 200, alignSelf: 'center' },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderBottomWidth: 1, marginBottom: 10, fontSize: 16, padding: 8 },
  button: { backgroundColor: '#ff5733', padding: 12, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  loader: { marginTop: 10 },
  response: { marginTop: 20, fontSize: 16, textAlign: 'center' },
});

export default RecommendationScreen;
