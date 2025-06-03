import { SortType } from '@/app/types/medal';

interface TableHeaderProps {
  sortType?: SortType;
  currentSort: SortType;
  onSortChange: (sort: SortType) => void;
  children: React.ReactNode;
}

/**
 * Renders a table header cell with optional sorting functionality.
 *
 * @param {Object} props - The component props
 * @param {SortType} [props.sortType] - The type of sorting for this header cell
 * @param {SortType} props.currentSort - The current active sort type
 * @param {Function} props.onSortChange - Callback function to handle sort changes
 * @param {React.ReactNode} props.children - The content of the table header cell
 * @returns {JSX.Element} A table header cell with optional interactive sorting
 */
export function TableHeader({
  sortType,
  currentSort,
  onSortChange,
  children,
}: TableHeaderProps) {
  const baseClasses = 'text-center py-3 text-gray-400 font-normal';
  const interactiveClasses = sortType ? 'cursor-pointer hover:bg-gray-50' : '';
  const selectedClasses =
    sortType && sortType === currentSort ? 'border-t-4 border-gray-300' : '';

  return (
    <th
      className={`${baseClasses} ${interactiveClasses} ${selectedClasses}`}
      onClick={sortType ? () => onSortChange(sortType) : undefined}
      title={sortType ? `Sort by ${sortType} medals` : undefined}
    >
      {children}
    </th>
  );
}
