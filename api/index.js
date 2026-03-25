const express = require('express');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// ─── API ROUTES ───────────────────────────────────────────────

// GET /api/features
app.get('/api/features', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'Autonomous AI Agents',
            description: 'Deploy self-learning agents that understand your business context. They reason, plan, and execute multi-step workflows without manual intervention.',
            tags: ['GPT-4 / Gemini', 'Multi-Agent']
        },
        {
            id: 2,
            name: 'Real-Time Data Pipelines',
            description: 'Stream, transform, and route data across your entire infrastructure in real time. Built-in connectors for 200+ services and databases.',
            tags: ['Streaming', '200+ Integrations']
        },
        {
            id: 3,
            name: 'Predictive Insights Engine',
            description: 'Turn raw data into actionable intelligence. Our ML-powered engine surfaces anomalies, forecasts trends, and recommends optimizations automatically.',
            tags: ['ML-Powered', 'Auto-Optimize']
        }
    ]);
});

// GET /api/pricing
app.get('/api/pricing', (req, res) => {
    res.json([
        {
            id: 1, tier: 'Starter', price: 0, period: 'month',
            description: 'For individuals and small projects.',
            features: ['1 AI Agent', '1,000 tasks / month', 'Community support', 'Basic analytics']
        },
        {
            id: 2, tier: 'Pro', price: 49, period: 'month',
            description: 'For growing teams and businesses.', popular: true,
            features: ['10 AI Agents', '50,000 tasks / month', 'Priority support', 'Advanced analytics', 'Custom integrations']
        },
        {
            id: 3, tier: 'Enterprise', price: 199, period: 'month',
            description: 'For large-scale deployments.',
            features: ['Unlimited AI Agents', 'Unlimited tasks', '24/7 dedicated support', 'Enterprise analytics', 'Custom integrations', 'Dedicated account manager']
        }
    ]);
});

// POST /api/contact
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields. Please provide name, email, and message.' });
    }
    console.log('── New Contact ──', { name, email, message });
    res.status(200).json({ success: true, message: 'Thank you for reaching out! We will get back to you within 24 hours.' });
});

module.exports = app;
