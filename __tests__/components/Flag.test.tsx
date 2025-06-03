import { render } from '@testing-library/react';
import { Flag } from '../../app/components/Flag';

jest.mock('../../app/constants', () => ({
  COUNTRIES: ['USA', 'CAN', 'CHN'],
  FLAG_SIZE: { WIDTH: 28, HEIGHT: 17 },
}));

describe('Flag', () => {
  it('should render valid country flag', () => {
    const { container } = render(<Flag countryCode="USA" />);
    const flag = container.firstChild as HTMLElement;

    expect(flag).toHaveClass('bg-no-repeat');
    expect(flag).toHaveAttribute('aria-label', 'Flag of USA');
    expect(flag.style.width).toBe('28px');
    expect(flag.style.height).toBe('17px');
  });

  it('should render placeholder for invalid country', () => {
    const { container } = render(<Flag countryCode="INVALID" />);
    const placeholder = container.firstChild as HTMLElement;

    expect(placeholder).toHaveClass('bg-gray-200');
    expect(placeholder).toHaveAttribute(
      'aria-label',
      'Flag not available for INVALID'
    );
    expect(placeholder.style.width).toBe('28px');
    expect(placeholder.style.height).toBe('17px');
  });
});
