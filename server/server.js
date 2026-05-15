import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import agentRoutes from './routes/agent.routes.js';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.join(__dirname, '..');
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
    model: 'gemini-2.0-flash'
});

app.use(express.json());

// API routes FIRST
app.use('/api', agentRoutes);

// frontend static files
app.use(express.static(path.join(root, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(root, 'public', 'index.html'));
});

app.listen(3005, () => {
    console.log('Server running on port 3005');
});