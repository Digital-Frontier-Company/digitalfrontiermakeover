
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { ContentGenerationRequest, generateContent, ContentBlock } from '@/services/contentService';

const ContentGenerator = () => {
  const [formData, setFormData] = useState<ContentGenerationRequest>({
    topic: '',
    keywords: [],
    tone: 'professional',
    length: 'medium',
    contentType: 'article'
  });
  const [generatedContent, setGeneratedContent] = useState<ContentBlock | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const content = await generateContent(formData);
      setGeneratedContent(content);
    } catch (error) {
      console.error('Generation failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Content Generator</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Generate New Content</h2>
          <div className="space-y-4">
            <Input
              placeholder="Topic"
              value={formData.topic}
              onChange={(e) => setFormData({...formData, topic: e.target.value})}
            />
            <Input
              placeholder="Keywords (comma separated)"
              value={formData.keywords.join(', ')}
              onChange={(e) => setFormData({
                ...formData, 
                keywords: e.target.value.split(',').map(k => k.trim())
              })}
            />
            <Button onClick={handleGenerate} disabled={isLoading}>
              {isLoading ? 'Generating...' : 'Generate Content'}
            </Button>
          </div>
        </Card>

        {generatedContent && (
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Generated Content</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Title:</h3>
                <p>{generatedContent.title}</p>
              </div>
              <div>
                <h3 className="font-medium">Hero Answer:</h3>
                <p>{generatedContent.hero_answer}</p>
              </div>
              <div>
                <h3 className="font-medium">Content:</h3>
                <Textarea value={generatedContent.content} readOnly rows={10} />
              </div>
              {generatedContent.metadata.seoTitle && (
                <div>
                  <h3 className="font-medium">SEO Title:</h3>
                  <p>{generatedContent.metadata.seoTitle}</p>
                </div>
              )}
              {generatedContent.metadata.metaDescription && (
                <div>
                  <h3 className="font-medium">Meta Description:</h3>
                  <p>{generatedContent.metadata.metaDescription}</p>
                </div>
              )}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ContentGenerator;
