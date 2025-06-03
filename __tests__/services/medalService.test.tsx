import { medalService } from '../../app/services/medalService';

global.fetch = jest.fn();
const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

describe('medalService', () => {
  beforeEach(() => {
    mockFetch.mockClear();
  });

  it('fetches medals successfully', async () => {
    const mockData = [{ code: 'USA', gold: 1, silver: 2, bronze: 3 }];
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    } as Response);

    const result = await medalService.fetchMedals();

    expect(result).toEqual(mockData);
    expect(mockFetch).toHaveBeenCalledWith('/data/medals.json');
  });

  it('throws error on failure', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Failed'));

    await expect(medalService.fetchMedals()).rejects.toThrow(
      'Failed to load medal data. Please try again later.'
    );
  });
});
