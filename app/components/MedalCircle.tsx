import { MEDAL_COLORS } from '../constants';

interface MedalCircleProps {
  type: 'gold' | 'silver' | 'bronze';
  isActive: boolean;
}

/**
 * Renders a circular medal icon with color variations based on medal type and active state.
 *
 * @param {Object} props - The component props
 * @param {'gold' | 'silver' | 'bronze'} props.type - The type of medal determining the color
 * @param {boolean} props.isActive - Whether the medal is in an active state
 * @returns {JSX.Element} A circular div representing a medal with appropriate color and accessibility label
 */
export function MedalCircle({ type, isActive }: MedalCircleProps) {
  const colorClass = MEDAL_COLORS[type][isActive ? 'active' : 'inactive'];

  return (
    <div
      className={`w-6 h-6 rounded-full mx-auto ${colorClass}`}
      aria-label={`${type} medal ${isActive ? '(active sort)' : ''}`}
    />
  );
}
