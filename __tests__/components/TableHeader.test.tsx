import { TableHeader } from '../../app/components/TableHeader';
import { render } from '@testing-library/react';

describe('ErrorMessage', () => {
  it('renders error message component', () => {
    const { getByText } = render(<TableHeader />);
    expect(
      getByText('This is from Table Header Component')
    ).toBeInTheDocument();
  });
});
