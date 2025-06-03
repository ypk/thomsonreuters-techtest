/**
 * Props for the LoadingSpinner component.
 *
 * @property {string} [message] - Optional custom message to display with the loading spinner.
 *                                Defaults to "Loading..." if not provided.
 */
interface LoadingSpinnerProps {
  message?: string;
}

/**
 * Renders a loading spinner with an optional custom message.
 *
 * @param {LoadingSpinnerProps} props - The component props.
 * @param {string} [props.message="Loading..."] - The message to display with the loading spinner.
 * @returns {JSX.Element} A centered loading indicator with text.
 */
export function LoadingSpinner({
  message = 'Loading...',
}: LoadingSpinnerProps) {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="text-lg text-gray-600">{message}</div>
    </div>
  );
}
