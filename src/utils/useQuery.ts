import React from 'react';
import { useSearchParams } from 'react-router-dom';

const useQuery = <QueryType extends object>() => {
  const [URLSearchParams, setURLSearchParams] = useSearchParams();

  const params = React.useMemo(() => {
    return Array.from(URLSearchParams.entries()).reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>) as QueryType;
  }, [URLSearchParams]);

  const setParams = React.useCallback((data: Partial<QueryType>) => {
    Object.entries(data).forEach(([key, value]) => {
      if (!value) {
        return URLSearchParams.delete(key);
      }
      URLSearchParams.set(key, value as string);
    });
    setURLSearchParams(URLSearchParams);
  }, [URLSearchParams, setURLSearchParams]);

  const data: [QueryType, typeof setParams] = React.useMemo(() => {
    return [params, setParams];
  }, [params, setParams]);

  return data;
};

export default useQuery;
