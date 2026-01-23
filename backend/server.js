import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { pool, initDatabase } from './config/database.js';
import dataRoutes from './routes/data.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencored({ extended: true, limit: '10mb' }));

// Initialize database
initDatabase().catch(err => {
  console.error('Failed to initialize database:', err);
  process.exit(1);
});

// Routes
app.use('/api/data', dataRoutes);

// Health check
app.get('/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ 
      status: 'ok',
      timestamp: new Date().toISOString(),
      database: 'connected'
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error',
      timestamp: new Date().toISOString(),
      database: 'disconnected'
    });
  }
});

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Motorway Status API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      data: '/api/data'
    }
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, closing server...');
  await pool.end();
  process.exit(0);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
});
