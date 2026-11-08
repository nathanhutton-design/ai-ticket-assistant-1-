// Small server for Render: serves index.html and forwards AI requests to Claude.
// The API key stays on the server (Render environment variable), never in the browser.
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.ANTHROPIC_API_KEY;
const page = fs.readFileSync(path.join(__dirname, 'index.html'));

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && (req.url === '/' || req.url === '/index.html')) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(page);
  }
  if (req.method === 'GET' && req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ ok: true, keySet: Boolean(API_KEY) }));
  }
  if (req.method === 'POST' && req.url === '/api/claude') {
    if (!API_KEY) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'ANTHROPIC_API_KEY is not set on the server.' }));
    }
    let body = '';
    req.on('data', c => { body += c; if (body.length > 100000) req.destroy(); });
    req.on('end', async () => {
      try {
        const input = JSON.parse(body);
        const payload = {
          model: input.model || 'claude-sonnet-4-6',
          max_tokens: Math.min(Number(input.max_tokens) || 1000, 1000), // cap cost per request
          system: input.system,
          messages: input.messages
        };
        const r = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY,
            'anthropic-version': '2023-06-01'
          },
          body: JSON.stringify(payload)
        });
        const text = await r.text();
        res.writeHead(r.status, { 'Content-Type': 'application/json' });
        res.end(text);
      } catch (e) {
        res.writeHead(502, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Could not reach the Claude API.' }));
      }
    });
    return;
  }
  res.writeHead(404); res.end('Not found');
});

server.listen(PORT, () => console.log(`AI Ticket Assistant running on port ${PORT}`));
