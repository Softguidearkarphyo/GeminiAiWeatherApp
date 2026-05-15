import express from 'express';
const agentRoutes = express.Router();

agentRoutes.post('/ask-agent', (req, res) => {
    const params = req.body;
    res.json({
        success: true,
        received: params
    });

});

export default agentRoutes;