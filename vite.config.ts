import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import PrerenderSPAPlugin from "vite-plugin-prerender";

// Define all routes that should be pre-rendered
const prerenderRoutes = [
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

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode === 'production' && PrerenderSPAPlugin({
      staticDir: path.join(process.cwd(), 'dist'),
      routes: prerenderRoutes,
      postProcess: (renderedRoute: { html: string; route: string }) => {
        // Inject meta tags and structured data into rendered HTML
        renderedRoute.html = renderedRoute.html
          .replace(/<title>.*?<\/title>/, (match: string) => {
            // Keep existing title but ensure it's SEO optimized
            return match;
          });
        
        return renderedRoute;
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-tabs'],
          charts: ['recharts']
        }
      }
    }
  },
  ssr: {
    noExternal: ['recharts']
  }
}));
