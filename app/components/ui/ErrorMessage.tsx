import { Container } from './Container';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

/**
 * Renders an error message component with an optional retry functionality.
 *
 * @param {Object} props - The component props
 * @param {string} props.message - The error message to display
 * @param {() => void} [props.onRetry] - Optional callback function to retry an action
 * @returns {React.ReactElement} A styled error message component with an icon, message, and optional retry button
 */
export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <Container className="max-w-2xl p-8 mx-auto bg-white overflow-hidden flex justify-center">
      <div className="relative border border-gray-100 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
              <svg
                className="size-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                />
              </svg>
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg font-medium text-black mb-2">
                Error Loading Data
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">{message}</p>
              </div>
            </div>
          </div>
        </div>
        {onRetry && (
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              onClick={onRetry}
              className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </Container>
  );
}
