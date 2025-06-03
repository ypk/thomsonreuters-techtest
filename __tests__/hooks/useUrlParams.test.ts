/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook, act } from '@testing-library/react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useUrlParams } from '../../app/hooks/useUrlParams';

jest.mock('next/navigation');

const mockPush = jest.fn();
const mockUseRouter = useRouter as jest.MockedFunction<typeof useRouter>;
const mockUseSearchParams = useSearchParams as jest.MockedFunction<
  typeof useSearchParams
>;
const mockUsePathname = usePathname as jest.MockedFunction<typeof usePathname>;

describe('useUrlParams', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockUseRouter.mockReturnValue({
      push: mockPush,
    } as any);

    mockUsePathname.mockReturnValue('/');
  });

  it('returns default sort when no params', () => {
    mockUseSearchParams.mockReturnValue({
      get: jest.fn().mockReturnValue(null),
      toString: jest.fn().mockReturnValue(''),
    } as any);

    const { result } = renderHook(() => useUrlParams());

    expect(result.current.currentSort).toBe('gold');
  });

  it('returns valid sort from params', () => {
    mockUseSearchParams.mockReturnValue({
      get: jest.fn().mockReturnValue('gold'),
      toString: jest.fn().mockReturnValue('sort=gold'),
    } as any);

    const { result } = renderHook(() => useUrlParams());

    expect(result.current.currentSort).toBe('gold');
  });

  it('returns default for invalid sort', () => {
    mockUseSearchParams.mockReturnValue({
      get: jest.fn().mockReturnValue('invalid'),
      toString: jest.fn().mockReturnValue('sort=invalid'),
    } as any);

    const { result } = renderHook(() => useUrlParams());

    expect(result.current.currentSort).toBe('gold');
  });

  it('updates sort parameter', () => {
    mockUseSearchParams.mockReturnValue({
      get: jest.fn().mockReturnValue('total'),
      toString: jest.fn().mockReturnValue(''),
    } as any);

    const { result } = renderHook(() => useUrlParams());

    act(() => {
      result.current.updateSort('gold');
    });

    expect(mockPush).toHaveBeenCalledWith('/?sort=gold');
  });
});
