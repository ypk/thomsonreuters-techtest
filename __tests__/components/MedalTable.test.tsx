import { render, screen, fireEvent } from '@testing-library/react';
import { MedalTable } from '../../app/components/MedalTable';

describe('MedalTable', () => {
  const mockProps = {
    countries: [
      { code: 'USA', gold: 10, silver: 8, bronze: 7, total: 25 },
      { code: 'CHN', gold: 9, silver: 6, bronze: 5, total: 20 },
    ],
    currentSort: 'total' as const,
    onSortChange: jest.fn(),
    loading: false,
  };

  beforeEach(() => {
    mockProps.onSortChange.mockClear();
  });

  it('displays loading state', () => {
    render(<MedalTable {...mockProps} loading={true} />);
    expect(screen.getByText('Loading medal data...')).toBeInTheDocument();
  });

  it('displays medal data', () => {
    render(<MedalTable {...mockProps} />);

    expect(screen.getByText('MEDAL COUNT')).toBeInTheDocument();
    expect(screen.getByText('USA')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
  });

  it('handles sorting', () => {
    render(<MedalTable {...mockProps} />);

    fireEvent.click(screen.getByText('TOTAL'));
    expect(mockProps.onSortChange).toHaveBeenCalledWith('total');
  });
});
