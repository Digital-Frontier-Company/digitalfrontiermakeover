
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { generateAISitemap, saveAISitemap } from '@/utils/aiSitemapGenerator';

const AISitemapGenerator = () => {
  const handleGenerateSitemap = () => {
    saveAISitemap();
  };

  const sitemapEntries = generateAISitemap();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">AI Sitemap Generator</h3>
          <p className="text-sm text-slate-400">
            Generate AI-optimized sitemap with summaries and primary entities
          </p>
        </div>
        <Button onClick={handleGenerateSitemap} className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download AI Sitemap
        </Button>
      </div>
      
      <div className="bg-slate-800/50 rounded-lg p-4">
        <h4 className="font-medium mb-3">Sitemap Preview ({sitemapEntries.length} entries)</h4>
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {sitemapEntries.slice(0, 5).map((entry, index) => (
            <div key={index} className="text-sm border-l-2 border-blue-500 pl-3">
              <div className="font-medium text-blue-400">{entry.url}</div>
              <div className="text-slate-300">{entry.summary}</div>
              <div className="text-xs text-slate-500">
                Entity: {entry.primaryEntity} | Priority: {entry.priority}
              </div>
            </div>
          ))}
          {sitemapEntries.length > 5 && (
            <div className="text-xs text-slate-500 text-center pt-2">
              ... and {sitemapEntries.length - 5} more entries
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AISitemapGenerator;
