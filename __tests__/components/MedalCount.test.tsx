import { render, screen } from '@testing-library/react';
import { MedalCount } from '../../app/components/MedalCount';

jest.mock('../../app/hooks/useUrlParams', () => ({
  useUrlParams: () => ({ currentSort: 'total', updateSort: jest.fn() }),
}));

jest.mock('../../app/hooks/useMedalData', () => ({
  useMedalData: () => ({
    countries: [{ code: 'USA', gold: 1, silver: 2, bronze: 3, total: 6 }],
    loading: false,
    error: null,
    retry: jest.fn(),
  }),
}));

describe('MedalCount', () => {
  it('renders medal count component', () => {
    render(<MedalCount />);
    expect(screen.getByText('MEDAL COUNT')).toBeInTheDocument();
  });
});
