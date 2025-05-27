
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { getUserContentHistory, ContentBlock } from '@/services/contentService';

const Dashboard = () => {
  const [contentHistory, setContentHistory] = useState<ContentBlock[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const history = await getUserContentHistory('mock-user-id');
        setContentHistory(history);
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading dashboard...</div>;
  }

  const totalContent = contentHistory?.length || 0;
  const recentContent = contentHistory?.filter((content) => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    return new Date(content.created_at) > oneWeekAgo;
  }) || [];

  const publishedContent = contentHistory?.length || 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Total Content</h3>
          <p className="text-3xl font-bold text-blue-600">{totalContent}</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Recent Content</h3>
          <p className="text-3xl font-bold text-green-600">{recentContent.length}</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Published</h3>
          <p className="text-3xl font-bold text-purple-600">{publishedContent}</p>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Content</h2>
        <div className="space-y-4">
          {contentHistory && contentHistory.length > 0 ? (
            contentHistory.slice(0, 5).map((content) => (
              <div key={content.id} className="border-b pb-2">
                <h3 className="font-medium">{content.title}</h3>
                <p className="text-sm text-gray-600">{content.hero_answer}</p>
                <p className="text-xs text-gray-500">
                  {new Date(content.created_at).toLocaleDateString()}
                </p>
              </div>
            ))
          ) : (
            <p>No content available.</p>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
