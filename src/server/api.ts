import axios from 'axios';

const API_BASE_URL = 'https://bible-api.com';

export const fetchVerse = async (verse: string, translation: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${verse}?translation=${translation}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching verse:', error);
    throw error;
  }
};
