import { Suspense } from 'react';
import { MedalCount } from './components/MedalCount';
import { LoadingSpinner } from './components/ui/LoadingSpinner';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<LoadingSpinner message="Loading data..." />}>
        <MedalCount />
      </Suspense>
    </main>
  );
}
