import qs from 'qs';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

async function fetchAPI(path, urlParamsObject = {}) {
  try {
    if (!API_URL) {
      throw new Error("Missing NEXT_PUBLIC_STRAPI_API_URL in .env.local");
    }

    // Construct URL safely
    const baseUrl = API_URL.replace(/\/$/, '');
    const cleanPath = path.replace(/^\//, '');
    const url = new URL(`${baseUrl}/${cleanPath}`);
    
    // Add query parameters
    const query = qs.stringify(urlParamsObject, {
      encodeValuesOnly: true,
      arrayFormat: 'brackets'
    });
    url.search = query;
    
    console.log("Fetching Strapi API:", url.toString());
    
    const response = await fetch(url, {
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      cache: 'no-store'
    });
    
    const text = await response.text();
    
    // Handle HTML responses
    if (text.startsWith('<!DOCTYPE html>') || text.startsWith('<html')) {
      console.error("HTML response received. Possible causes:");
      console.error("1. Incorrect API URL:", API_URL);
      console.error("2. Missing CORS configuration");
      console.error("3. Authentication required");
      console.error("Response snippet:", text.substring(0, 300));
      throw new Error("API returned HTML instead of JSON");
    }
    
    const data = JSON.parse(text);
    
    if (!response.ok) {
      throw new Error(`API Error ${response.status}: ${data.error?.message || response.statusText}`);
    }
    
    return data;
  } catch (error) {
    console.error("Strapi API Error:", error.message);
    return {
      data: null,
      error: error.message
    };
  }
}

export async function getAllTours() {
  const response = await fetchAPI('api/tours', {
    populate: '*',
    sort: 'createdAt:desc',
    pagination: { pageSize: 100 }
  });
  
  return response.data || [];
}

export async function getTourBySlug(slug) {
  if (!slug) return null;
  
  const response = await fetchAPI('api/tours', {
    filters: { slug: { $eq: slug } },
    populate: '*',
    pagination: { pageSize: 1 }
  });
  
  return response.data?.[0] || null;
}