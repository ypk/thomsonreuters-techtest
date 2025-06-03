export const COUNTRIES = [
  'AUT',
  'BLR',
  'CAN',
  'CHN',
  'FRA',
  'GER',
  'ITA',
  'NED',
  'NOR',
  'RUS',
  'SUI',
  'SWE',
  'USA',
] as const;

export const FLAG_SIZE = {
  WIDTH: 28,
  HEIGHT: 17,
  SPRITE_HEIGHT: 260,
} as const;

export const TOP_COUNTRIES_LIMIT = 10;

export const MEDAL_COLORS = {
  gold: { active: 'bg-yellow-500', inactive: 'bg-yellow-400' },
  silver: { active: 'bg-gray-500', inactive: 'bg-gray-400' },
  bronze: { active: 'bg-yellow-900', inactive: 'bg-yellow-800' },
} as const;
