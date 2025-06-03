import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorMessage } from '../../../app/components/ui/ErrorMessage';

describe('ErrorMessage', () => {
  it('displays error message', () => {
    render(<ErrorMessage message="Test error" />);

    expect(screen.getByText('Error Loading Data')).toBeInTheDocument();
    expect(screen.getByText('Test error')).toBeInTheDocument();
  });

  it('displays retry button when onRetry provided', () => {
    const mockRetry = jest.fn();
    render(<ErrorMessage message="Error" onRetry={mockRetry} />);

    expect(screen.getByText('Try Again')).toBeInTheDocument();
  });

  it('does not display retry button when onRetry not provided', () => {
    render(<ErrorMessage message="Error" />);

    expect(screen.queryByText('Try Again')).not.toBeInTheDocument();
  });

  it('calls onRetry when button clicked', () => {
    const mockRetry = jest.fn();
    render(<ErrorMessage message="Error" onRetry={mockRetry} />);

    fireEvent.click(screen.getByText('Try Again'));

    expect(mockRetry).toHaveBeenCalledTimes(1);
  });

  it('displays error icon', () => {
    const { container } = render(<ErrorMessage message="Error" />);

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  });
});
