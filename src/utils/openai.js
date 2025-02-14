// src/utils/openai.js
import axios from 'axios';
import { OPENAI_API_KEY } from '@env';

const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

export const getDishRecommendations = async (mood, history = "No recent orders") => {
  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are Menu Matcher, a fun and engaging food assistant who gives humorous dish recommendations." },
          { role: "user", content: `I am feeling ${mood}. My past orders: ${history}. Suggest 3 dishes with fun emojis and a bit of humor.` }
        ],
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    return "⚠️ Oops! Couldn't get recommendations. Try again!";
  }
};

export const fetchChatResponse = async (message) => {
  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are Menu Matcher, a fun and engaging AI food assistant with humor and emojis." },
          { role: "user", content: message }
        ],
        max_tokens: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "⚠️ Oops! I couldn't get that. Try again!";
  }
};
