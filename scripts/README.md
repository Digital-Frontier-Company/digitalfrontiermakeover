
# Static Generation Scripts

This directory contains scripts for generating static HTML files for better SEO crawlability.

## Scripts

- `generate-static.js` - Main static generation script using Puppeteer
- `build-with-static.js` - Combined build and static generation process
- `serve-static.js` - Development server for testing static files

## Usage

### Option 1: Manual Generation
```bash
# Build the app
npm run build

# Start preview server
npm run preview

# In another terminal, generate static files
node scripts/generate-static.js
```

### Option 2: Combined Build (Recommended)
```bash
# Build and generate static files in one command
node scripts/build-with-static.js
```

### Option 3: Test Static Files
```bash
# Serve static files for testing
node scripts/serve-static.js
```

## How it Works

1. Builds the React application normally
2. Starts a preview server
3. Uses Puppeteer to visit each route
4. Waits for React to fully render
5. Saves the rendered HTML as static files
6. Bots will see fully rendered content instead of empty HTML

## Files Generated

Static HTML files are created in the `dist` directory:
- `/index.html` - Homepage
- `/about-us.html` - About page
- `/answer-engine-optimization.html` - AEO page
- And so on for all routes...

This ensures search engines and AI crawlers can properly index your content.
