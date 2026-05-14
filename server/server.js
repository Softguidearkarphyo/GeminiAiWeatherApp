import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.join(__dirname, '..');
app.use(express.json());
app.use(express.static(path.join(root, 'public')));

// routes
// import agentRoutes from './routes/agent.routes.js';
// app.use('/api', agentRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(root, 'public', 'index.html'));
});

app.listen(3005, () => {
    console.log('Server running on port 3000');
});