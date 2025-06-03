/**
 * Props for the Container component.
 * @param children React child nodes to be rendered inside the container
 * @param className Optional additional CSS classes to apply to the container
 */
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Renders a container with a maximum width, centered on the page with white background and padding.
 * @param children React child nodes to be rendered inside the container
 * @param className Optional additional CSS classes to apply to the container
 * @returns A div element containing the children with responsive styling
 */
export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div
      className={`max-w-2xl mx-auto bg-white p-8 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
