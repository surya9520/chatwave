require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const googleAuthRoutes = require('./routes/googleauth');

const app = express();

// Connect to the database
connectDB();
app.use(cors({
origin: 'https://chatwave-ysq7.onrender.com',
methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
credentials: true,
})); 

app.use(express.json());

app.get('/', (req, res) => { 
    res.json({ message: 'Hello, JSON' });
  });

// Mount routes
app.use('/auth', authRoutes);
app.use('/auth/google', googleAuthRoutes);

app.listen(5000, () => {
console.log('Server running on port 5000');
});