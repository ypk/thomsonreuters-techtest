'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useCallback } from 'react';
import { SortType } from '@/app/types/medal';

const VALID_SORTS: SortType[] = ['gold', 'silver', 'bronze', 'total'];

/**
 * Custom hook for managing URL parameters related to sorting.
 * Provides methods to get and update the current sort parameter.
 *
 * @returns {Object} An object containing:
 * - currentSort: The current sort type ('gold', 'silver', 'bronze', or 'total')
 * - updateSort: A function to update the sort parameter in the URL
 */
export function useUrlParams() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  /**
   * Determines the current sort type from URL search parameters.
   *
   * @returns {SortType} The current sort type, defaulting to 'total' if not a valid sort
   */
  const currentSort = useCallback((): SortType => {
    const sort = searchParams.get('sort') as SortType;
    return VALID_SORTS.includes(sort) ? sort : 'total';
  }, [searchParams]);

  /**
   * Updates the sort parameter in the URL search parameters.
   *
   * @param {SortType} newSort - The new sort type to set in the URL
   * Modifies the current URL by updating the 'sort' query parameter
   * and navigates to the updated URL using the router.
   */
  const updateSort = useCallback(
    (newSort: SortType) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set('sort', newSort);
      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, router, pathname]
  );

  return {
    currentSort: currentSort(),
    updateSort,
  };
}
