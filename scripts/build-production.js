
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

async function buildProduction() {
  console.log('🚀 Starting production build with static generation...');
  
  try {
    // Step 1: Clean previous builds
    console.log('🧹 Cleaning previous builds...');
    const distPath = path.join(process.cwd(), 'dist');
    if (fs.existsSync(distPath)) {
      fs.rmSync(distPath, { recursive: true, force: true });
    }
    
    // Step 2: Run the regular build
    console.log('📦 Building application...');
    await runCommand('npm', ['run', 'build']);
    
    // Step 3: Start preview server in background
    console.log('🌐 Starting preview server...');
    const previewProcess = spawn('npm', ['run', 'preview'], {
      stdio: 'pipe',
      shell: true
    });
    
    // Wait for server to be ready
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Step 4: Generate static files
    console.log('🔧 Generating static files...');
    const { generateStaticFiles } = require('./generate-static.js');
    await generateStaticFiles();
    
    // Step 5: Kill preview server
    previewProcess.kill();
    
    // Step 6: Create .htaccess for proper routing
    console.log('⚙️ Creating .htaccess for routing...');
    const htaccessContent = `
RewriteEngine On

# Handle static HTML files for bots
RewriteCond %{HTTP_USER_AGENT} (googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora|showyoubot|outbrain|pinterest|crawler|spider|bot|ChatGPT|Claude|GPTBot|CCBot|anthropic) [NC]
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]

# Fallback to index.html for SPA
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
`;
    
    fs.writeFileSync(path.join(distPath, '.htaccess'), htaccessContent.trim());
    
    console.log('🎉 Production build with static generation complete!');
    console.log('📁 Files available in ./dist/');
    console.log('🤖 Bots will see static HTML files');
    console.log('👥 Users will see full React experience');
    
  } catch (error) {
    console.error('❌ Production build failed:', error);
    process.exit(1);
  }
}

function runCommand(command, args) {
  return new Promise((resolve, reject) => {
    const process = spawn(command, args, {
      stdio: 'inherit',
      shell: true
    });
    
    process.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Command failed with exit code ${code}`));
      } else {
        resolve();
      }
    });
  });
}

if (require.main === module) {
  buildProduction();
}

module.exports = { buildProduction };
