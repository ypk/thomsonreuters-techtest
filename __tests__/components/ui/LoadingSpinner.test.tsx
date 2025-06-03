import { render, screen } from '@testing-library/react';
import { LoadingSpinner } from '../../../app/components/ui/LoadingSpinner';

describe('LoadingSpinner', () => {
  it('displays default loading message', () => {
    render(<LoadingSpinner />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays custom message', () => {
    render(<LoadingSpinner message="Custom loading message" />);

    expect(screen.getByText('Custom loading message')).toBeInTheDocument();
  });

  it('applies correct styling', () => {
    const { container } = render(<LoadingSpinner />);

    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass(
      'flex',
      'justify-center',
      'items-center',
      'h-64'
    );

    const message = wrapper?.firstChild;
    expect(message).toHaveClass('text-lg', 'text-gray-600');
  });
});
