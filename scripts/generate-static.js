
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Routes to pre-render (from vite.config.ts)
const routes = [
  '/',
  '/about-us',
  '/contact',
  '/pricing',
  '/faq',
  '/blog',
  '/answer-engine-optimization',
  '/generative-engine-optimization', 
  '/search-engine-optimization',
  '/crypto-marketing',
  '/ai-prompt-templates',
  '/information-architecture-prompts',
  '/user-experience-prompts',
  '/resources/content-creation-agent',
  '/psychological-digital-marketing-insights',
  '/technical',
  '/evolution',
  '/regulations',
  '/sectors',
  '/future',
  '/ai-bias-in-advertising',
  '/ai-and-digital-marketing',
  '/recommender-system-generalization',
  '/site-map',
  '/newsletter'
];

async function generateStaticFiles() {
  console.log('🚀 Starting static generation...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set viewport for consistent rendering
  await page.setViewport({ width: 1200, height: 800 });
  
  const distDir = path.join(process.cwd(), 'dist');
  
  for (const route of routes) {
    try {
      console.log(`📄 Generating: ${route}`);
      
      // Navigate to the route on the built site
      const url = `http://localhost:4173${route}`;
      await page.goto(url, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });
      
      // Wait for React to fully render
      await page.waitForSelector('main', { timeout: 10000 });
      
      // Wait for any dynamic content to load
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Get the fully rendered HTML
      const html = await page.content();
      
      // Create directory structure if needed
      const routePath = route === '/' ? '/index' : route;
      const filePath = path.join(distDir, `${routePath}.html`);
      const dirPath = path.dirname(filePath);
      
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      
      // Write the static HTML file
      fs.writeFileSync(filePath, html);
      console.log(`✅ Generated: ${filePath}`);
      
    } catch (error) {
      console.error(`❌ Error generating ${route}:`, error.message);
    }
  }
  
  await browser.close();
  console.log('🎉 Static generation complete!');
}

// Check if preview server is running
async function checkPreviewServer() {
  try {
    const response = await fetch('http://localhost:4173');
    return response.ok;
  } catch {
    return false;
  }
}

async function main() {
  const serverRunning = await checkPreviewServer();
  
  if (!serverRunning) {
    console.error('❌ Preview server not running. Please run "npm run preview" first.');
    process.exit(1);
  }
  
  await generateStaticFiles();
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { generateStaticFiles };
