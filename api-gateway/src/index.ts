const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy requests to /api/users to User Service
app.use('/api/users', createProxyMiddleware({
  target: 'http://localhost:3001',
  changeOrigin: true,
}));

// Proxy requests to /api/books to Book Service
app.use('/api/books', createProxyMiddleware({
  target: 'http://localhost:3002',
  changeOrigin: true,
}));

// Start the API Gateway
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
