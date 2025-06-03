import { Country, CountryWithTotal, SortType } from '@/app/types/medal';

/**
 * Provides utility functions for sorting and processing country medal data.
 * Handles adding total medal counts, sorting countries by medal criteria, and extracting top performers.
 */
export const sortingService = {
  /**
   * Calculates the total medal count for each country by summing gold, silver, and bronze medals.
   * @param countries - An array of countries with their medal counts
   * @returns An array of countries with an additional total medal count
   */
  addTotals(countries: Country[]): CountryWithTotal[] {
    return countries.map((country) => ({
      ...country,
      total: country.gold + country.silver + country.bronze,
    }));
  },

  /**
   * Sorts countries based on a specified medal type with multiple tie-breaking criteria.
   * Prioritizes sorting by the specified medal type, then by gold medals, and finally by country code.
   * @param countries - An array of countries with total medal counts
   * @param sortType - The primary medal type to sort by (gold, silver, bronze, or total)
   * @returns A new sorted array of countries
   */
  sortCountries(
    countries: CountryWithTotal[],
    sortType: SortType
  ): CountryWithTotal[] {
    return [...countries].sort((a, b) => {
      // Primary sort
      const primaryDiff = b[sortType] - a[sortType];
      if (primaryDiff !== 0) return primaryDiff;

      // Tie-breaker: gold medals
      const goldDiff = b.gold - a.gold;
      if (goldDiff !== 0) return goldDiff;

      // Final tie-breaker: alphabetical
      return a.code.localeCompare(b.code);
    });
  },

  /**
   * Retrieves the top N countries from a sorted list.
   * @param countries - An array of countries to select from
   * @param limit - The number of top countries to return
   * @returns An array of the top N countries
   */
  getTopCountries(
    countries: CountryWithTotal[],
    limit: number
  ): CountryWithTotal[] {
    return countries.slice(0, limit);
  },
};
