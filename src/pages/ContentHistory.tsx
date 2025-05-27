
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { getUserContentHistory, ContentBlock } from '@/services/contentService';

const ContentHistory = () => {
  const [contentHistory, setContentHistory] = useState<ContentBlock[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getUserContentHistory('mock-user-id');
        setContentHistory(history);
      } catch (error) {
        console.error('Failed to fetch content history:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Content History</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contentHistory && contentHistory.length > 0 ? (
          contentHistory.map((content) => (
            <Card key={content.id} className="p-6">
              <h3 className="font-semibold mb-2">{content.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{content.hero_answer}</p>
              <p className="text-xs text-gray-500">
                Created: {new Date(content.created_at).toLocaleDateString()}
              </p>
            </Card>
          ))
        ) : (
          <p>No content history found.</p>
        )}
      </div>
    </div>
  );
};

export default ContentHistory;
