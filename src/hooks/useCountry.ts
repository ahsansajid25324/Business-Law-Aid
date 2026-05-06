// src/hooks/useCountry.ts
import { useState, useEffect } from 'react';

export function useCountry() {
  const [country, setCountry] = useState<string>('DEFAULT');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem('user_country');
    if (cached) {
      setTimeout(() => {
        setCountry(cached);
        setLoading(false);
      }, 0);
      return;
    }

    fetch('/api/geo')                          // ✅ same origin, no CORS ever
      .then(res => res.json())
      .then(data => {
        const code = data.country || 'DEFAULT';
        localStorage.setItem('user_country', code);
        setCountry(code);
      })
      .catch(() => setCountry('DEFAULT'))
      .finally(() => setLoading(false));
  }, []);

  return { country, loading };
}