
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;
const distDir = path.join(process.cwd(), 'dist');

// Serve static files
app.use(express.static(distDir));

// Handle routes with static HTML files
app.get('*', (req, res) => {
  const staticFile = path.join(distDir, `${req.path}.html`);
  
  if (fs.existsSync(staticFile)) {
    res.sendFile(staticFile);
  } else if (req.path === '/') {
    res.sendFile(path.join(distDir, 'index.html'));
  } else {
    // Fallback to SPA
    res.sendFile(path.join(distDir, 'index.html'));
  }
});

app.listen(port, () => {
  console.log(`🌐 Static server running at http://localhost:${port}`);
  console.log('📄 Static HTML files available for all routes');
});
