require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors({
    origin: ['https://your-allowed-origin.com'] // Update to your allowed origin
}));
app.use(express.json());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Example API endpoint
app.post('/api/data', (req, res) => {
    // Validate input (should be added with a proper validation library)
    const inputData = req.body;
    // Process input data...
    res.status(200).send('Data processed successfully!');
});

// Error Handling
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('An error occurred. Please try again later.');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});