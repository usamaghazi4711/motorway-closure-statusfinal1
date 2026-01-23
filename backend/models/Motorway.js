import { pool } from '../config/database.js';

class Motorway {
  // Get data by key
  static async findByKey(key) {
    try {
      const [rows] = await pool.query(
        'SELECT data_key as `key`, data_value as `value`, updated_at FROM motorway_data WHERE data_key = ?',
        [key]
      );
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      console.error('Find error:', error);
      throw error;
    }
  }

  // Create or update data
  static async upsert(key, value) {
    try {
      const [result] = await pool.query(
        `INSERT INTO motorway_data (data_key, data_value) 
         VALUES (?, ?) 
         ON DUPLICATE KEY UPDATE data_value = ?, updated_at = CURRENT_TIMESTAMP`,
        [key, value, value]
      );
      
      return { key, value };
    } catch (error) {
      console.error('Upsert error:', error);
      throw error;
    }
  }

  // Delete data by key
  static async deleteByKey(key) {
    try {
      const [result] = await pool.query(
        'DELETE FROM motorway_data WHERE data_key = ?',
        [key]
      );
      return result.affectedRows > 0;
    } catch (error) {
      console.error('Delete error:', error);
      throw error;
    }
  }

  // List keys with optional prefix
  static async listKeys(prefix = null) {
    try {
      let query = 'SELECT data_key as `key` FROM motorway_data';
      let params = [];
      
      if (prefix) {
        query += ' WHERE data_key LIKE ?';
        params.push(`${prefix}%`);
      }
      
      query += ' ORDER BY data_key';
      
      const [rows] = await pool.query(query, params);
      return rows.map(row => row.key);
    } catch (error) {
      console.error('List error:', error);
      throw error;
    }
  }
}

export default Motorway;
