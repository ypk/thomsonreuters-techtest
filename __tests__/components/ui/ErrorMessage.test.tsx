import { ErrorMessage } from '@/app/components/ui/ErrorMessage';
import { render } from '@testing-library/react';

describe('ErrorMessage', () => {
  it('renders error message component', () => {
    const { getByText } = render(<ErrorMessage />);
    expect(
      getByText('This is from Error Message Component')
    ).toBeInTheDocument();
  });
});
