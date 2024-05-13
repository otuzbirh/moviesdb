import { useEffect, useState } from 'react';

interface FetchDataResult<T> {
  data: T | null;
  loading: boolean;
  error: any;
}

const useFetchData = <T>(fetchFn: () => Promise<T>, dependencies: any[] = []): FetchDataResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchFn();
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      setData(null);
      setLoading(false);
      setError(null);
    };
  }, dependencies);

  return { data, loading, error };
};

export default useFetchData;
