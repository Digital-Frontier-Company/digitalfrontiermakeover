
const { spawn } = require('child_process');
const path = require('path');

async function buildWithStatic() {
  console.log('📦 Building application...');
  
  // First, run the regular build
  const buildProcess = spawn('npm', ['run', 'build'], {
    stdio: 'inherit',
    shell: true
  });
  
  buildProcess.on('close', (code) => {
    if (code !== 0) {
      console.error('❌ Build failed');
      process.exit(code);
    }
    
    console.log('✅ Build complete, starting preview server...');
    
    // Start preview server
    const previewProcess = spawn('npm', ['run', 'preview'], {
      stdio: 'pipe',
      shell: true
    });
    
    // Wait for server to be ready
    setTimeout(async () => {
      console.log('🔧 Generating static files...');
      
      try {
        const { generateStaticFiles } = require('./generate-static.js');
        await generateStaticFiles();
        
        // Kill preview server
        previewProcess.kill();
        console.log('🎉 Build with static generation complete!');
      } catch (error) {
        console.error('❌ Static generation failed:', error);
        previewProcess.kill();
        process.exit(1);
      }
    }, 3000);
  });
}

buildWithStatic();
