import { getAllTours } from '@/lib/strapi';

export async function GET() {
  try {
    const tours = await getAllTours();
    return Response.json({ success: true, tours });
  } catch (error) {
    return Response.json({ 
      success: false, 
      error: error.message,
      apiUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL 
    });
  }
}