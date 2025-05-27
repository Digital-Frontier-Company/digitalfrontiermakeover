
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { ContentSearchRequest, searchContent, ContentBlock } from '@/services/contentService';

const ContentSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<ContentBlock[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    try {
      const request: ContentSearchRequest = {
        query: searchQuery
      };
      const searchResults = await searchContent(request);
      setResults(searchResults);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          placeholder="Search content..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <Button onClick={handleSearch} disabled={isLoading}>
          <Search className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-2">
        {results.map((result) => (
          <Card key={result.id} className="p-4">
            <h3 className="font-semibold">{result.title}</h3>
            <p className="text-sm text-gray-600">{result.hero_answer}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContentSearch;
