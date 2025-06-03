import {
  COUNTRIES,
  FLAG_SIZE,
  TOP_COUNTRIES_LIMIT,
  MEDAL_COLORS,
} from '../../app/constants/index';

describe('Constants Index', () => {
  describe('COUNTRIES', () => {
    it('exports correct countries array', () => {
      expect(COUNTRIES).toEqual([
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
      ]);
    });

    it('has correct length', () => {
      expect(COUNTRIES).toHaveLength(13);
    });

    it('contains valid country codes', () => {
      COUNTRIES.forEach((country) => {
        expect(typeof country).toBe('string');
        expect(country).toHaveLength(3);
        expect(country).toMatch(/^[A-Z]{3}$/);
      });
    });

    it('has unique country codes', () => {
      const uniqueCountries = new Set(COUNTRIES);
      expect(uniqueCountries.size).toBe(COUNTRIES.length);
    });
  });

  describe('FLAG_SIZE', () => {
    it('exports correct flag size dimensions', () => {
      expect(FLAG_SIZE).toEqual({
        WIDTH: 28,
        HEIGHT: 17,
        SPRITE_HEIGHT: 260,
      });
    });

    it('has reasonable aspect ratio', () => {
      const aspectRatio = FLAG_SIZE.WIDTH / FLAG_SIZE.HEIGHT;
      expect(aspectRatio).toBeCloseTo(1.65, 1);
    });
  });

  describe('TOP_COUNTRIES_LIMIT', () => {
    it('exports correct top countries limit', () => {
      expect(TOP_COUNTRIES_LIMIT).toBe(10);
    });

    it('is less than total countries', () => {
      expect(TOP_COUNTRIES_LIMIT).toBeLessThan(COUNTRIES.length);
    });
  });

  describe('MEDAL_COLORS', () => {
    it('exports correct medal color structure', () => {
      expect(MEDAL_COLORS).toHaveProperty('gold');
      expect(MEDAL_COLORS).toHaveProperty('silver');
      expect(MEDAL_COLORS).toHaveProperty('bronze');
    });

    it('uses correct Tailwind color classes for gold medal', () => {
      expect(MEDAL_COLORS.gold.active).toBe('bg-yellow-500');
      expect(MEDAL_COLORS.gold.inactive).toBe('bg-yellow-400');
    });

    it('uses correct Tailwind color classes for silver medal', () => {
      expect(MEDAL_COLORS.silver.active).toBe('bg-gray-500');
      expect(MEDAL_COLORS.silver.inactive).toBe('bg-gray-400');
    });

    it('uses correct Tailwind color classes for bronze medal', () => {
      expect(MEDAL_COLORS.bronze.active).toBe('bg-yellow-900');
      expect(MEDAL_COLORS.bronze.inactive).toBe('bg-yellow-800');
    });
  });
});
