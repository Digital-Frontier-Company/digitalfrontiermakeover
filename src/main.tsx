
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

// Import the Aspect Ratio component to ensure it's available
import '@/components/ui/aspect-ratio';

// Create root and render app
const root = createRoot(document.getElementById("root")!);

root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Signal that React has mounted and page is ready for prerendering
setTimeout(() => {
  document.dispatchEvent(new Event('prerender-ready'));
}, 100);
