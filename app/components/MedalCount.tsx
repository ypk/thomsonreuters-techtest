'use client';

import { useUrlParams } from '@/app/hooks/useUrlParams';
import { useMedalData } from '@/app/hooks/useMedalData';
import { MedalTable } from './MedalTable';
import { ErrorMessage } from './ui/ErrorMessage';
import { Container } from './ui/Container';

/**
 * Renders the Medal Count component, displaying a table of countries' medal counts.
 *
 * This component handles different states of medal data:
 * - Displays an error message if data fetching fails
 * - Shows a "No medal data available" message if no data exists
 * - Renders a MedalTable with sortable country medal information when data is present
 *
 * @returns {JSX.Element} A rendered medal count view with appropriate state handling
 */
export function MedalCount() {
  const { currentSort, updateSort } = useUrlParams();
  const { countries, loading, error, retry } = useMedalData(currentSort);

  if (error) {
    return (
      <div className="medal-app">
        <ErrorMessage message={error} onRetry={retry} />
      </div>
    );
  }

  if (!loading && countries.length === 0 && !error) {
    return (
      <Container>
        <h1 className="text-2xl font-light text-gray-400 mb-6 tracking-wide">
          MEDAL COUNT
        </h1>
        <div className="text-center py-8">
          <p className="text-gray-500">No medal data available</p>
        </div>
      </Container>
    );
  }

  return (
    <div className="medal-app">
      <MedalTable
        countries={countries}
        currentSort={currentSort}
        onSortChange={updateSort}
        loading={loading}
      />
    </div>
  );
}
