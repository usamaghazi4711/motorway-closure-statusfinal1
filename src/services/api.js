const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const storage = {
  async get(key) {
    try {
      const response = await fetch(`${API_URL}/data/${key}`);
      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error('Failed to fetch');
      }
      return await response.json();
    } catch (error) {
      console.error('Storage get error:', error);
      return null;
    }
  },

  async set(key, value) {
    try {
      const response = await fetch(`${API_URL}/data`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key, value })
      });
      if (!response.ok) throw new Error('Failed to save');
      return await response.json();
    } catch (error) {
      console.error('Storage set error:', error);
      return null;
    }
  },

  async delete(key) {
    try {
      const response = await fetch(`${API_URL}/data/${key}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Failed to delete');
      return await response.json();
    } catch (error) {
      console.error('Storage delete error:', error);
      return null;
    }
  },

  async list(prefix) {
    try {
      const url = prefix ? `${API_URL}/data?prefix=${prefix}` : `${API_URL}/data`;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to list');
      return await response.json();
    } catch (error) {
      console.error('Storage list error:', error);
      return null;
    }
  }
};
