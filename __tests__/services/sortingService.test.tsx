import { sortingService } from '../../app/services/sortingService';

describe('sortingService integration', () => {
  it('processes countries from raw data to top results', () => {
    const rawCountries = [
      { code: 'USA', gold: 10, silver: 8, bronze: 7 },
      { code: 'CHN', gold: 9, silver: 6, bronze: 5 },
      { code: 'GER', gold: 8, silver: 7, bronze: 6 },
    ];

    const withTotals = sortingService.addTotals(rawCountries);
    const sorted = sortingService.sortCountries(withTotals, 'total');
    const top2 = sortingService.getTopCountries(sorted, 2);

    expect(top2).toEqual([
      { code: 'USA', gold: 10, silver: 8, bronze: 7, total: 25 },
      { code: 'GER', gold: 8, silver: 7, bronze: 6, total: 21 },
    ]);
  });

  describe('getTieBreaker', () => {
    it('returns correct tie-breaker for each sort type', () => {
      expect(sortingService.getTieBreaker('gold')).toBe('silver');
      expect(sortingService.getTieBreaker('silver')).toBe('gold');
      expect(sortingService.getTieBreaker('bronze')).toBe('gold');
      expect(sortingService.getTieBreaker('total')).toBe('gold');
    });
  });

  describe('sortCountries with correct tie-breaking', () => {
    it('breaks gold ties with silver medals', () => {
      const countries = [
        { code: 'USA', gold: 5, silver: 3, bronze: 2, total: 10 },
        { code: 'CAN', gold: 5, silver: 4, bronze: 1, total: 10 },
      ];

      const result = sortingService.sortCountries(countries, 'gold');

      expect(result[0].code).toBe('CAN'); // More silver medals
      expect(result[1].code).toBe('USA');
    });
  });
});
