/* eslint-disable @typescript-eslint/no-explicit-any */
import { render } from '@testing-library/react';
import { MedalCircle } from '../../app/components/MedalCircle';

describe('MedalCircle', () => {
  it('renders medal circle with correct styling', () => {
    const { container } = render(<MedalCircle type="gold" isActive={false} />);
    const circle = container.firstChild as HTMLElement;

    expect(circle).toHaveClass(
      'w-6',
      'h-6',
      'rounded-full',
      'mx-auto',
      'bg-yellow-400'
    );
    expect(circle).toHaveAttribute('aria-label', 'gold medal ');
  });

  it('changes color when active', () => {
    const { container } = render(<MedalCircle type="gold" isActive={true} />);
    const circle = container.firstChild as HTMLElement;

    expect(circle).toHaveClass('bg-yellow-500');
    expect(circle).toHaveAttribute('aria-label', 'gold medal (active sort)');
  });

  it('handles different medal types', () => {
    ['gold', 'silver', 'bronze'].forEach((type) => {
      const { container } = render(
        <MedalCircle type={type as any} isActive={false} />
      );
      const circle = container.firstChild as HTMLElement;

      expect(circle).toHaveAttribute('aria-label', `${type} medal `);
    });
  });
});
