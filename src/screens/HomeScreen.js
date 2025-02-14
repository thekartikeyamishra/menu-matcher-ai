// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LottieView source={require('../../assets/food.json')} autoPlay loop style={styles.animation} />
      <Text style={styles.heading}>🍽️ Welcome to Menu Matcher!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Recommendations')}>
        <Text style={styles.buttonText}>Get Recommendations</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('History')}>
        <Text style={styles.buttonText}>View Order History</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  animation: { width: 200, height: 200 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  button: { backgroundColor: '#ff6347', padding: 15, borderRadius: 8, marginTop: 10 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' }
});

export default HomeScreen;
