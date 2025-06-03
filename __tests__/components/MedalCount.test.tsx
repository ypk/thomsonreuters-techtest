import { render, screen } from '@testing-library/react';
import { MedalCount } from '../../app/components/MedalCount';

describe('MedalCount', () => {
  it('renders medal count component', () => {
    render(<MedalCount />);
    expect(screen.getByText('MEDAL COUNT')).toBeInTheDocument();
  });
});
