'use client';

import { useUrlParams } from '@/app/hooks/useUrlParams';
import { useMedalData } from '@/app/hooks/useMedalData';
import { MedalTable } from './MedalTable';
import { ErrorMessage } from './ui/ErrorMessage';
import { Container } from './ui/Container';

export function MedalCount() {
  const { currentSort } = useUrlParams();
  const { countries, loading, error } = useMedalData(currentSort);

  if (error) {
    return (
      <div className="medal-app">
        <ErrorMessage message={error} />
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
      <MedalTable />
    </div>
  );
}
