// api/geo.js
export const config = { runtime: 'edge' };

export default function handler(request) {
  // Vercel automatically fills this from the request IP
  const country = request.geo?.country ?? 'DEFAULT';

  return new Response(JSON.stringify({ country }), {
    headers: { 'Content-Type': 'application/json' },
  });
}