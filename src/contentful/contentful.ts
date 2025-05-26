import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export const getContentByType = async  <T>(contentType: string): Promise<T | null> => {
  const res = await client.getEntries({ content_type: contentType ,include: 10,});
return (res.items[0]?.fields as unknown) as T || null;
};