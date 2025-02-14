import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const EmojiReaction = () => {
  const [reaction, setReaction] = useState(null);
  const emojis = ['😍', '🤩', '👍', '😋', '😃'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How do you feel about this dish?</Text>
      <View style={styles.emojiContainer}>
        {emojis.map((emoji) => (
          <TouchableOpacity key={emoji} onPress={() => setReaction(emoji)}>
            <Text style={styles.emoji}>{emoji}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {reaction && <Text style={styles.reactionText}>You reacted with: {reaction}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: 10 },
  title: { fontSize: 18, fontWeight: 'bold' },
  emojiContainer: { flexDirection: 'row', marginTop: 5 },
  emoji: { fontSize: 24, marginHorizontal: 10 },
  reactionText: { fontSize: 16, marginTop: 10 },
});

export default EmojiReaction;
