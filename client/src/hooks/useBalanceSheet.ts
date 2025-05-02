import { useEffect, useState } from 'react';
import { getBalanceSheet } from '@/services/reportApi';

export const useBalanceSheet = () => {
  const [data, setData] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getBalanceSheet().then((res) => {
        console.log(res);
        setData(res)
    }).catch((err) => {
        setError(err)
    })
    .finally(() => {
        setLoading(false);
    });
  }, []);

  return { data, loading, error };
};
