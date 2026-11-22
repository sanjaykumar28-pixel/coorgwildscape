import { useState, useCallback } from 'react';

export function useSearch(initialValue = '') {
  const [query, setQuery] = useState(initialValue);

  const clearSearch = useCallback(() => {
    setQuery('');
  }, []);

  return {
    query,
    setQuery,
    clearSearch,
  };
}
