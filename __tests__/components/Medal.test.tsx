import { Medal } from '../..//app/components/Medal';
import { render } from '@testing-library/react';

describe('ErrorMessage', () => {
  it('renders error message component', () => {
    const { getByText } = render(<Medal />);
    expect(getByText('This is from Medal Component')).toBeInTheDocument();
  });
});
