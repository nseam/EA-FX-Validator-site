const cors = require('cors')
const express = require('express');
const morgan = require("morgan");
const {createProxyMiddleware} = require('http-proxy-middleware');

// Create Express Server
const app = express();

app.use(cors())

// Configuration
const PORT = 3005;
const HOST = "localhost";

// Logging
app.use(morgan('dev'));

// Proxy endpoints
app.use('/node_status', createProxyMiddleware({
  target: 'http://example.com/status',
  changeOrigin: true,
  secure: false,
  pathRewrite: {
    [`^/node_status`]: '',
  },
}));

// Start the Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
