import { render, screen } from '@testing-library/react';
import { Container } from '../../../app/components/ui/Container';

describe('Container', () => {
  it('renders children', () => {
    render(
      <Container>
        <div>Test content</div>
      </Container>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Container className="custom-class">
        <div>Test</div>
      </Container>
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('combines default and custom classes', () => {
    const { container } = render(
      <Container className="border-2 border-red-500">
        <div>Test</div>
      </Container>
    );

    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass(
      'max-w-2xl',
      'mx-auto',
      'bg-white',
      'p-8',
      'overflow-hidden',
      'border-2',
      'border-red-500'
    );
  });

  it('handles empty className prop', () => {
    const { container } = render(
      <Container className="">
        <div>Test</div>
      </Container>
    );

    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass(
      'max-w-2xl',
      'mx-auto',
      'bg-white',
      'p-8',
      'overflow-hidden'
    );
  });

  it('handles undefined className prop', () => {
    const { container } = render(
      <Container>
        <div>Test</div>
      </Container>
    );

    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass(
      'max-w-2xl',
      'mx-auto',
      'bg-white',
      'p-8',
      'overflow-hidden'
    );
  });
});
