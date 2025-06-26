import qs from 'qs';

// 1. Get API URL from environment variables
const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

async function fetchAPI(path, urlParamsObject = {}) {
  try {
    // 2. Validate API URL
    if (!API_URL) {
      throw new Error("Missing Strapi API URL. Add NEXT_PUBLIC_STRAPI_API_URL to .env.local");
    }

    // 3. Clean URL paths
    const cleanPath = path.replace(/^\//, ''); // Remove leading slashes
    const cleanBaseUrl = API_URL.replace(/\/$/, ''); // Remove trailing slashes
    
    // 4. Build query string
    const queryString = qs.stringify(urlParamsObject, {
      encodeValuesOnly: true,
      arrayFormat: 'brackets'
    });
    
    // 5. Construct full URL
    const requestUrl = `${cleanBaseUrl}/${cleanPath}${queryString ? `?${queryString}` : ''}`;
    
    // 6. Log URL for debugging
    console.log("[Strapi] Fetching:", requestUrl);
    
    // 7. Make API request
    const response = await fetch(requestUrl, {
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json' // Explicitly request JSON
      }
    });
    
    // 8. Check for HTML responses
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const textResponse = await response.text();
      
      // 9. Handle common HTML errors
      if (textResponse.startsWith('<!DOCTYPE html>')) {
        console.error("⚠️ Received HTML instead of JSON. Possible issues:");
        console.error("- Incorrect API URL: ", API_URL);
        console.error("- Missing CORS configuration");
        console.error("- Authentication required");
        console.error("Response snippet:", textResponse.substring(0, 500));
        
        throw new Error(`Strapi returned HTML (status ${response.status})`);
      }
      
      throw new Error(`Unexpected content type: ${contentType}`);
    }
    
    // 10. Return parsed JSON
    return await response.json();
  } catch (error) {
    console.error("🚨 Strapi API Error:", error.message);
    return {
      data: null,
      error: error.message
    };
  }
}

// 11. Get all tours
export async function getAllTours() {
  const response = await fetchAPI('api/tours', {
    populate: '*',
    sort: 'createdAt:desc',
    pagination: { pageSize: 100 }
  });
  
  return response.data || [];
}

// 12. Get single tour by slug
export async function getTourBySlug(slug) {
  if (!slug) return null;
  
  const response = await fetchAPI('api/tours', {
    filters: { slug: { $eq: slug } },
    populate: '*',
    pagination: { pageSize: 1 }
  });
  
  return (response.data && response.data[0]) || null;
}