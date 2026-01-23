const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path'); // Required to handle file paths
const app = express();

app.use(cors());
app.use(express.json());

// 1. MySQL Connection
const db = mysql.createPool({
    host: 'localhost',
    user: 'u401300623_498mws',
    password: 'Dre123hea@!',
    database: 'u401300623_498mws',
    waitForConnections: true,
    connectionLimit: 10
});

// 2. API Routes
app.get('/api/status', (req, res) => {
    db.query('SELECT * FROM plaza_status', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.post('/api/update', (req, res) => {
    const { key, motorway, plaza, direction, status, reason, startTime } = req.body;
    const sql = `INSERT INTO plaza_status (id, motorway, plaza_name, direction, status, reason, start_time) 
                 VALUES (?, ?, ?, ?, ?, ?, ?) 
                 ON DUPLICATE KEY UPDATE status=?, reason=?, start_time=?`;
    
    db.query(sql, [key, motorway, plaza, direction, status, reason, startTime, status, reason, startTime], (err) => {
        if (err) return res.status(500).send(err);
        db.query("UPDATE app_metadata SET meta_value = NOW() WHERE meta_key = 'last_updated'");
        res.json({ success: true });
    });
});

// 3. FRONTEND SERVING (Fixes the White Screen)
// This tells Express to serve the 'dist' folder created by 'npm run build'
app.use(express.static(path.join(__dirname, 'dist')));

// This handles any route (like /M-2 or /M-3) and sends it to the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
