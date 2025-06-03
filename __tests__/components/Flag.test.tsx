import { Flag } from '../../app/components/Flag';
import { render } from '@testing-library/react';

describe('ErrorMessage', () => {
  it('renders error message component', () => {
    const { getByText } = render(<Flag />);
    expect(getByText('This is from Flag Component')).toBeInTheDocument();
  });
});
