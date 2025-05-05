import { useState, useEffect } from 'react';

const useFetch = (url, options = {}, retries = 0) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();
    const fetchData = async (attempt = 0) => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(url, {
          signal: controller.signal,
          ...options,
          headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {}),
          },
          body: options.body ? JSON.stringify(options.body) : null,
        });

        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const result = await res.json();
        setData(result);
      } catch (err) {
        if (attempt < retries) {
          fetchData(attempt + 1); // Retry
        } else if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url, JSON.stringify(options)]); // dependency on options to refetch if changed

  return { data, loading, error };
};

export default useFetch;
