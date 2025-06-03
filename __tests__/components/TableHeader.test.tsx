import { render, screen, fireEvent } from '@testing-library/react';
import { TableHeader } from '../../app/components/TableHeader';

describe('TableHeader', () => {
  const mockOnSortChange = jest.fn();
  const defaultProps = {
    currentSort: 'total' as const,
    onSortChange: mockOnSortChange,
    children: 'Test Content',
  };

  beforeEach(() => {
    mockOnSortChange.mockClear();
  });

  it('renders content and handles clicks when sortable', () => {
    render(<TableHeader {...defaultProps} sortType="gold" />);

    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.getByRole('columnheader')).toHaveAttribute(
      'title',
      'Sort by gold medals'
    );

    fireEvent.click(screen.getByRole('columnheader'));
    expect(mockOnSortChange).toHaveBeenCalledWith('gold');
  });

  it('renders content but ignores clicks when not sortable', () => {
    render(<TableHeader {...defaultProps} />);

    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.getByRole('columnheader')).not.toHaveAttribute('title');

    fireEvent.click(screen.getByRole('columnheader'));
    expect(mockOnSortChange).not.toHaveBeenCalled();
  });
});
