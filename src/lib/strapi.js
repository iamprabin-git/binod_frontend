import qs from 'qs';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || '';

async function fetchAPI(path, urlParamsObject = {}) {
  try {
    if (!API_URL) {
      console.warn('⚠️ Warning: NEXT_PUBLIC_STRAPI_API_URL is not set.');
      return { data: null, error: 'Missing API URL' };
    }

    // Ensure slashes are clean
    const baseUrl = API_URL.replace(/\/$/, '');
    const cleanPath = path.replace(/^\//, '');
    const url = new URL(`${baseUrl}/${cleanPath}`);

    // Append query params
    const query = qs.stringify(urlParamsObject, {
      encodeValuesOnly: true,
      arrayFormat: 'brackets'
    });
    url.search = query;

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      cache: 'no-store'
    });

    const text = await response.text();

    // Catch unexpected HTML (common when CORS fails or auth fails)
    if (text.startsWith('<!DOCTYPE html>') || text.startsWith('<html')) {
      throw new Error('Strapi returned HTML instead of JSON. Check CORS or authentication.');
    }

    const data = JSON.parse(text);

    if (!response.ok) {
      throw new Error(`API Error ${response.status}: ${data?.error?.message || response.statusText}`);
    }

    return data;
  } catch (error) {
    console.error('Strapi API Error:', error.message);
    return { data: null, error: error.message };
  }
}

// Get all tours
export async function getAllTours() {
  const response = await fetchAPI('api/tours', {
    populate: '*',
    sort: 'createdAt:desc',
    pagination: { pageSize: 100 }
  });

  return response.data || [];
}

// Get single tour by slug
export async function getTourBySlug(slug) {
  if (!slug) return null;

  const response = await fetchAPI('api/tours', {
    filters: { slug: { $eq: slug } },
    populate: '*',
    pagination: { pageSize: 1 }
  });

  return response.data?.[0] || null;
}
