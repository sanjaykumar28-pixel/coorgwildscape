import { useState, useCallback } from 'react';

export function useFilters<T extends string>(defaultCategory: T | 'All' = 'All') {
  const [selectedCategory, setSelectedCategory] = useState<T | 'All'>(defaultCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const resetFilters = useCallback(() => {
    setSelectedCategory('All');
    setSearchQuery('');
  }, []);

  const hasActiveFilters = selectedCategory !== 'All' || searchQuery.trim().length > 0;

  return {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    resetFilters,
    hasActiveFilters,
  };
}
