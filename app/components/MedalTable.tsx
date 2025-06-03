import { CountryWithTotal, SortType } from '@/app/types/medal';
import { Container } from './ui/Container';
import { LoadingSpinner } from './ui/LoadingSpinner';
import { Flag } from './Flag';
import { MedalCircle } from './MedalCircle';
import { TableHeader } from './TableHeader';

interface MedalTableProps {
  countries: CountryWithTotal[];
  currentSort: SortType;
  onSortChange: (sortType: SortType) => void;
  loading?: boolean;
}

/**
 * Renders a medal table displaying country rankings and medal counts.
 *
 * @param {Object} props - The component props
 * @param {CountryWithTotal[]} props.countries - List of countries with their medal counts
 * @param {SortType} props.currentSort - Current sorting type for the medal table
 * @param {(sortType: SortType) => void} props.onSortChange - Callback function to handle sort type changes
 * @param {boolean} [props.loading] - Optional flag to show loading state
 *
 * @returns {React.ReactElement} A table component displaying Olympic medal rankings
 */
export function MedalTable({
  countries,
  currentSort,
  onSortChange,
  loading,
}: MedalTableProps) {
  if (loading) {
    return (
      <Container>
        <LoadingSpinner message="Loading medal data..." />
      </Container>
    );
  }

  return (
    <Container>
      <h1 className="text-2xl font-light text-gray-400 mb-6 tracking-wide">
        MEDAL COUNT
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-4 border-gray-300">
              <TableHeader
                sortType={undefined}
                currentSort={currentSort}
                onSortChange={onSortChange}
              ></TableHeader>
              <TableHeader
                sortType={undefined}
                currentSort={currentSort}
                onSortChange={onSortChange}
              ></TableHeader>
              <TableHeader
                sortType="gold"
                currentSort={currentSort}
                onSortChange={onSortChange}
              >
                <MedalCircle type="gold" isActive={currentSort === 'gold'} />
              </TableHeader>
              <TableHeader
                sortType="silver"
                currentSort={currentSort}
                onSortChange={onSortChange}
              >
                <MedalCircle
                  type="silver"
                  isActive={currentSort === 'silver'}
                />
              </TableHeader>
              <TableHeader
                sortType="bronze"
                currentSort={currentSort}
                onSortChange={onSortChange}
              >
                <MedalCircle
                  type="bronze"
                  isActive={currentSort === 'bronze'}
                />
              </TableHeader>
              <TableHeader
                sortType="total"
                currentSort={currentSort}
                onSortChange={onSortChange}
              >
                TOTAL
              </TableHeader>
            </tr>
          </thead>
          <tbody>
            {countries.map((country, index) => (
              <tr
                key={country.code}
                className={
                  index < countries.length - 1 ? 'border-b border-gray-200' : ''
                }
              >
                <td className="py-2 text-gray-400 text-center font-roboto font-extrabold">
                  {index + 1}
                </td>
                <td className="py-2 flex items-center">
                  <div className="mx-3">
                    <Flag countryCode={country.code} />
                  </div>
                  <span className="text-gray-400 font-roboto font-bold">
                    {country.code}
                  </span>
                </td>
                <td className="text-center py-2 text-gray-400 font-roboto font-bold">
                  {country.gold}
                </td>
                <td className="text-center py-2 text-gray-400 font-roboto font-bold">
                  {country.silver}
                </td>
                <td className="text-center py-2 text-gray-400 font-roboto font-bold">
                  {country.bronze}
                </td>
                <td className="text-center py-2 text-gray-900 font-roboto font-bold">
                  {country.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
