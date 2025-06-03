import { Country } from '@/app/types/medal';

/**
 * Service for fetching Olympic medal data from a JSON file.
 * Provides a method to retrieve medal information for different countries.
 *
 * @returns {Promise<Country[]>} A promise that resolves to an array of countries with their medal details.
 * @throws {Error} Throws an error if the medal data cannot be fetched or parsed.
 */
export const medalService = {
  async fetchMedals(): Promise<Country[]> {
    try {
      const response = await fetch('/data/medals.json');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Failed to fetch medal data:', error);
      throw new Error('Failed to load medal data. Please try again later.');
    }
  },
};
