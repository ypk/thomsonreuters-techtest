/* eslint-disable @typescript-eslint/no-explicit-any */
import { COUNTRIES, FLAG_SIZE } from '@/app/constants';

interface FlagProps {
  countryCode: string;
}

/**
 * Renders a flag component based on the provided country code.
 *
 * @param {Object} props - The component props.
 * @param {string} props.countryCode - The ISO country code to display.
 * @returns {JSX.Element} A div representing the flag, either as a sprite from a flags image or a placeholder.
 *
 * @description Displays a flag by positioning a background image sprite or shows a gray placeholder
 * if the country code is not found in the predefined list of countries.
 */
export function Flag({ countryCode }: FlagProps) {
  const flagIndex = COUNTRIES.indexOf(countryCode as any);

  if (flagIndex === -1) {
    return (
      <div
        className="bg-gray-200"
        style={{ width: FLAG_SIZE.WIDTH, height: FLAG_SIZE.HEIGHT }}
        aria-label={`Flag not available for ${countryCode}`}
      />
    );
  }

  const backgroundPositionY = -(flagIndex * FLAG_SIZE.HEIGHT);

  return (
    <div
      className="bg-no-repeat"
      style={{
        width: FLAG_SIZE.WIDTH,
        height: FLAG_SIZE.HEIGHT,
        backgroundImage: 'url(/flags.png)',
        backgroundPosition: `0 ${backgroundPositionY}px`,
        backgroundSize: `${FLAG_SIZE.WIDTH}px auto`,
      }}
      title={`${countryCode} flag`}
      aria-label={`Flag of ${countryCode}`}
    />
  );
}
