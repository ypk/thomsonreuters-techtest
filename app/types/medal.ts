export interface Country {
  code: string;
  gold: number;
  silver: number;
  bronze: number;
}

export interface CountryWithTotal extends Country {
  total: number;
}

export type SortType = 'gold' | 'silver' | 'bronze' | 'total';

export interface SortConfig {
  type: SortType;
  primary: keyof CountryWithTotal;
  tieBreaker: keyof CountryWithTotal;
}
