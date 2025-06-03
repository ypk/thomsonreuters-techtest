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
});
