
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
    args: [
      '--no-sandbox', 
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu'
    ]
  });
  
  const page = await browser.newPage();
  
  // Set a more realistic user agent to avoid bot detection
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
  
  // Set viewport for consistent rendering
  await page.setViewport({ width: 1200, height: 800 });
  
  const distDir = path.join(process.cwd(), 'dist');
  
  for (const route of routes) {
    try {
      console.log(`📄 Generating: ${route}`);
      
      // Navigate to the route on the built site
      const url = `http://localhost:4173${route}`;
      await page.goto(url, { 
        waitUntil: 'networkidle2',
        timeout: 60000 
      });
      
      // Wait for React to fully render
      await page.waitForSelector('#root', { timeout: 30000 });
      
      // Wait for any dynamic content to load
      await page.evaluate(() => {
        return new Promise((resolve) => {
          // Wait for images to load
          const images = document.querySelectorAll('img');
          let loadedImages = 0;
          
          if (images.length === 0) {
            resolve();
            return;
          }
          
          images.forEach(img => {
            if (img.complete) {
              loadedImages++;
            } else {
              img.onload = () => {
                loadedImages++;
                if (loadedImages === images.length) {
                  resolve();
                }
              };
              img.onerror = () => {
                loadedImages++;
                if (loadedImages === images.length) {
                  resolve();
                }
              };
            }
          });
          
          if (loadedImages === images.length) {
            resolve();
          }
          
          // Fallback timeout
          setTimeout(resolve, 5000);
        });
      });
      
      // Additional wait for any async operations
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Get the fully rendered HTML
      const html = await page.content();
      
      // Enhance the HTML with additional SEO content
      const enhancedHtml = enhanceHtmlForSEO(html, route);
      
      // Create directory structure if needed
      const routePath = route === '/' ? '/index' : route;
      const filePath = path.join(distDir, `${routePath}.html`);
      const dirPath = path.dirname(filePath);
      
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      
      // Write the static HTML file
      fs.writeFileSync(filePath, enhancedHtml);
      console.log(`✅ Generated: ${filePath}`);
      
    } catch (error) {
      console.error(`❌ Error generating ${route}:`, error.message);
      
      // Try to create a fallback static page
      try {
        const fallbackHtml = createFallbackHtml(route);
        const routePath = route === '/' ? '/index' : route;
        const filePath = path.join(distDir, `${routePath}.html`);
        const dirPath = path.dirname(filePath);
        
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true });
        }
        
        fs.writeFileSync(filePath, fallbackHtml);
        console.log(`⚠️ Created fallback for: ${filePath}`);
      } catch (fallbackError) {
        console.error(`❌ Failed to create fallback for ${route}:`, fallbackError.message);
      }
    }
  }
  
  await browser.close();
  console.log('🎉 Static generation complete!');
}

function enhanceHtmlForSEO(html, route) {
  // Add additional meta tags and content based on route
  const routeInfo = getRouteInfo(route);
  
  // Inject route-specific meta tags
  const metaInjection = `
    <meta name="description" content="${routeInfo.description}" />
    <meta property="og:title" content="${routeInfo.title}" />
    <meta property="og:description" content="${routeInfo.description}" />
    <meta property="og:url" content="https://www.thedigitalfrontier.ai${route}" />
    <link rel="canonical" href="https://www.thedigitalfrontier.ai${route}" />
  `;
  
  return html.replace('</head>', `${metaInjection}</head>`);
}

function createFallbackHtml(route) {
  const routeInfo = getRouteInfo(route);
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${routeInfo.title} | Digital Frontier</title>
  <meta name="description" content="${routeInfo.description}" />
  <link rel="canonical" href="https://www.thedigitalfrontier.ai${route}" />
</head>
<body>
  <header>
    <h1>Digital Frontier - AI-Powered Marketing</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/answer-engine-optimization">AEO</a>
      <a href="/generative-engine-optimization">GEO</a>
      <a href="/contact">Contact</a>
    </nav>
  </header>
  <main>
    <h1>${routeInfo.title}</h1>
    <p>${routeInfo.description}</p>
    <p>We help businesses leverage AI for smarter marketing, SEO, AEO, GEO and digital transformation.</p>
  </main>
  <script>
    // Redirect to main app after 2 seconds
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  </script>
</body>
</html>`;
}

function getRouteInfo(route) {
  const routeMap = {
    '/': {
      title: 'AI-Powered Marketing & Digital Transformation',
      description: 'Digital Frontier helps businesses leverage AI for smarter marketing, SEO, AEO, GEO and digital transformation.'
    },
    '/answer-engine-optimization': {
      title: 'Answer Engine Optimization (AEO)',
      description: 'Optimize your content for AI-powered search engines like ChatGPT, Claude, and Bard.'
    },
    '/generative-engine-optimization': {
      title: 'Generative Engine Optimization (GEO)',
      description: 'Optimize content for AI quote selection and citation in generative AI responses.'
    },
    '/about-us': {
      title: 'About Digital Frontier',
      description: 'Learn about our AI-powered marketing agency and digital transformation expertise.'
    },
    '/contact': {
      title: 'Contact Digital Frontier',
      description: 'Get in touch with our AI marketing experts for a consultation.'
    }
  };
  
  return routeMap[route] || {
    title: 'Digital Frontier',
    description: 'AI-powered marketing and digital transformation solutions.'
  };
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
