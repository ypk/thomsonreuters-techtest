import { MedalTable } from '../../app/components/MedalTable';
import { render } from '@testing-library/react';

describe('ErrorMessage', () => {
  it('renders error message component', () => {
    const { getByText } = render(<MedalTable />);
    expect(getByText('This is from Medal Table Component')).toBeInTheDocument();
  });
});
