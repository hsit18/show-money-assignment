import { useEffect, useState } from 'react';
import { getBalanceSheet } from '@/services/reportService';
import type { Report } from '@/types/report';

export const useBalanceSheet = () => {
  const [data, setData] = useState<Report[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getBalanceSheet().then((res) => {
        console.log(res);
        setData(res.Reports)
    }).catch((err) => {
        setError(err)
    })
    .finally(() => {
        setLoading(false);
    });
  }, []);

  return { data, loading, error };
};
