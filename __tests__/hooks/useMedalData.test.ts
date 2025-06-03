import { renderHook, waitFor, act } from '@testing-library/react';
import { useMedalData } from '../../app/hooks/useMedalData';
import { medalService } from '../../app/services/medalService';
import { sortingService } from '../../app/services/sortingService';

jest.mock('../../app/services/medalService');
jest.mock('../../app/services/sortingService');

const mockMedalService = medalService as jest.Mocked<typeof medallService>;
const mockSortingService = sortingService as jest.Mocked<typeof sortingService>;

describe('useMedalData', () => {
  const mockRawData = [
    { code: 'USA', gold: 10, silver: 8, bronze: 7 },
    { code: 'CHN', gold: 9, silver: 6, bronze: 5 },
  ];

  const mockDataWithTotals = [
    { code: 'USA', gold: 10, silver: 8, bronze: 7, total: 25 },
    { code: 'CHN', gold: 9, silver: 6, bronze: 5, total: 20 },
  ];

  beforeEach(() => {
    jest.clearAllMocks();

    mockSortingService.addTotals.mockReturnValue(mockDataWithTotals);
    mockSortingService.sortCountries.mockReturnValue(mockDataWithTotals);
    mockSortingService.getTopCountries.mockReturnValue(mockDataWithTotals);
  });

  it('should initialize with loading state', () => {
    mockMedalService.fetchMedals.mockImplementation(
      () => new Promise(() => {})
    ); // Never resolves

    const { result } = renderHook(() => useMedalData('total'));

    expect(result.current.loading).toBe(true);
    expect(result.current.countries).toEqual([]);
    expect(result.current.error).toBe(null);
  });

  it('should fetch and process data successfully', async () => {
    mockMedalService.fetchMedals.mockResolvedValue(mockRawData);

    const { result } = renderHook(() => useMedalData('total'));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.countries).toEqual(mockDataWithTotals);
    expect(result.current.error).toBe(null);
    expect(mockMedalService.fetchMedals).toHaveBeenCalledTimes(1);
    expect(mockSortingService.addTotals).toHaveBeenCalledWith(mockRawData);
    expect(mockSortingService.sortCountries).toHaveBeenCalledWith(
      mockDataWithTotals,
      'total'
    );
    expect(mockSortingService.getTopCountries).toHaveBeenCalledWith(
      mockDataWithTotals,
      10
    );
  });

  it('should handle fetch errors', async () => {
    const errorMessage = 'Network error';
    mockMedalService.fetchMedals.mockRejectedValue(new Error(errorMessage));

    const { result } = renderHook(() => useMedalData('total'));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.countries).toEqual([]);
    expect(result.current.error).toBe(errorMessage);
  });

  it('should handle unknown errors', async () => {
    mockMedalService.fetchMedals.mockRejectedValue('Unknown error');

    const { result } = renderHook(() => useMedalData('total'));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe('An unexpected error occurred');
  });

  it('should refetch data when sortType changes', async () => {
    mockMedalService.fetchMedals.mockResolvedValue(mockRawData);

    const { result, rerender } = renderHook(
      ({ sortType }) => useMedalData(sortType),
      { initialProps: { sortType: 'total' as const } }
    );

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(mockMedalService.fetchMedals).toHaveBeenCalledTimes(1);

    // Change sort type
    act(() => {
      rerender({ sortType: 'gold' as const });
    });

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(mockMedalService.fetchMedals).toHaveBeenCalledTimes(2);
    expect(mockSortingService.sortCountries).toHaveBeenLastCalledWith(
      mockDataWithTotals,
      'gold'
    );
  });

  it('should provide retry function that re-fetches data', async () => {
    mockMedalService.fetchMedals
      .mockRejectedValueOnce(new Error('First error'))
      .mockResolvedValueOnce(mockRawData);

    const { result } = renderHook(() => useMedalData('total'));

    await waitFor(() => {
      expect(result.current.error).toBe('First error');
    });

    await act(async () => {
      result.current.retry();
    });

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.countries).toEqual(mockDataWithTotals);
    expect(result.current.error).toBe(null);
    expect(mockMedalService.fetchMedals).toHaveBeenCalledTimes(2);
  });

  it('should reset error state when retrying', async () => {
    mockMedalService.fetchMedals.mockRejectedValue(new Error('Network error'));

    const { result } = renderHook(() => useMedalData('total'));

    await waitFor(() => {
      expect(result.current.error).toBe('Network error');
    });

    mockMedalService.fetchMedals.mockResolvedValue(mockRawData);

    await act(async () => {
      result.current.retry();
    });

    await waitFor(() => {
      expect(result.current.error).toBe(null);
    });
  });

  it('should set loading to true during retry', async () => {
    mockMedalService.fetchMedals.mockRejectedValue(new Error('Network error'));

    const { result } = renderHook(() => useMedalData('total'));

    await waitFor(() => {
      expect(result.current.error).toBe('Network error');
      expect(result.current.loading).toBe(false);
    });

    mockMedalService.fetchMedals.mockImplementation(
      () => new Promise(() => {})
    ); // Never resolves

    act(() => {
      result.current.retry();
    });

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);
  });
});
