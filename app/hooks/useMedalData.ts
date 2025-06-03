/**
 * Custom hook to fetch and manage medal data for top countries.
 *
 * @param {SortType} sortType - The type of sorting to apply to the medal data
 * @returns {Object} An object containing:
 * - countries: Array of top countries with medal totals
 * - loading: Boolean indicating if data is being fetched
 * - error: Error message if data fetching fails
 * - retry: Function to retry fetching medal data
 */
'use client';

import { useState, useEffect } from 'react';
import { CountryWithTotal, SortType } from '@/app/types/medal';
import { medalService } from '@/app/services/medalService';
import { sortingService } from '@/app/services/sortingService';
import { TOP_COUNTRIES_LIMIT } from '@/app/constants';

export function useMedalData(sortType: SortType) {
  const [countries, setCountries] = useState<CountryWithTotal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const rawData = await medalService.fetchMedals();
      const dataWithTotals = sortingService.addTotals(rawData);
      const sorted = sortingService.sortCountries(dataWithTotals, sortType);
      const topCountries = sortingService.getTopCountries(
        sorted,
        TOP_COUNTRIES_LIMIT
      );

      setCountries(topCountries);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An unexpected error occurred'
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [sortType]);

  return { countries, loading, error, retry: fetchData };
}
