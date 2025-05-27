
import { supabase } from '@/integrations/supabase/client';

export interface ContentSearchRequest {
  query: string;
  filters?: {
    category?: string;
    dateRange?: {
      start: string;
      end: string;
    };
  };
}

export interface ContentGenerationRequest {
  topic: string;
  keywords: string[];
  tone?: string;
  length?: 'short' | 'medium' | 'long';
  contentType?: 'blog' | 'article' | 'social' | 'email';
}

export interface ContentBlockMetadata {
  [key: string]: any;
  title?: string;
  description?: string;
  seoTitle?: string;
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  jsonLdSchema?: any;
  ctaVariants?: string[];
  keywords?: string[];
  category?: string;
}

export interface ContentBlock {
  id: number;
  title: string;
  content: string;
  hero_answer: string;
  metadata: ContentBlockMetadata;
  user_id: string;
  created_at: string;
  generated_at: string;
}

export const searchContent = async (request: ContentSearchRequest) => {
  try {
    let query = supabase
      .from('content_blocks')
      .select('*')
      .ilike('title', `%${request.query}%`);

    if (request.filters?.category) {
      query = query.eq('metadata->category', request.filters.category);
    }

    if (request.filters?.dateRange) {
      query = query
        .gte('created_at', request.filters.dateRange.start)
        .lte('created_at', request.filters.dateRange.end);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data as ContentBlock[];
  } catch (error) {
    console.error('Error searching content:', error);
    throw error;
  }
};

export const generateContent = async (request: ContentGenerationRequest) => {
  try {
    // This would typically call an AI service to generate content
    // For now, return mock data
    const mockContent: Omit<ContentBlock, 'id' | 'created_at'> = {
      title: `${request.topic} - Complete Guide`,
      content: `# ${request.topic}\n\nThis is generated content about ${request.topic}...`,
      hero_answer: `Learn everything about ${request.topic} in this comprehensive guide.`,
      metadata: {
        title: `${request.topic} - Complete Guide`,
        description: `Comprehensive guide about ${request.topic}`,
        seoTitle: `${request.topic} Guide | Digital Frontier`,
        metaDescription: `Learn ${request.topic} with our expert guide`,
        keywords: request.keywords,
        category: request.contentType || 'article'
      },
      user_id: 'mock-user-id',
      generated_at: new Date().toISOString()
    };

    // Save to database
    const { data, error } = await supabase
      .from('content_blocks')
      .insert([{
        title: mockContent.title,
        content: mockContent.content,
        hero_answer: mockContent.hero_answer,
        metadata: mockContent.metadata as any,
        user_id: mockContent.user_id,
        generated_at: mockContent.generated_at
      }])
      .select()
      .single();

    if (error) throw error;
    return data as ContentBlock;
  } catch (error) {
    console.error('Error generating content:', error);
    throw error;
  }
};

export const getUserContentHistory = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from('content_blocks')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data as ContentBlock[];
  } catch (error) {
    console.error('Error fetching content history:', error);
    throw error;
  }
};

export const saveContentBlock = async (contentBlock: Omit<ContentBlock, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('content_blocks')
      .insert([{
        title: contentBlock.title,
        content: contentBlock.content,
        hero_answer: contentBlock.hero_answer,
        metadata: contentBlock.metadata as any,
        user_id: contentBlock.user_id,
        generated_at: contentBlock.generated_at
      }])
      .select()
      .single();

    if (error) throw error;
    return data as ContentBlock;
  } catch (error) {
    console.error('Error saving content block:', error);
    throw error;
  }
};

export const updateContentBlock = async (id: number, updates: Partial<ContentBlock>) => {
  try {
    const { data, error } = await supabase
      .from('content_blocks')
      .update({
        ...updates,
        metadata: updates.metadata as any
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data as ContentBlock;
  } catch (error) {
    console.error('Error updating content block:', error);
    throw error;
  }
};

export const deleteContentBlock = async (id: number) => {
  try {
    const { error } = await supabase
      .from('content_blocks')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error deleting content block:', error);
    throw error;
  }
};
