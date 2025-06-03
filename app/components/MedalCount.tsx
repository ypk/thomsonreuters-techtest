'use client';

import { useState } from 'react';

type SortType = 'gold' | 'silver' | 'bronze' | 'total';

export function MedalCount() {
  const [sortType, setSortType] = useState<SortType>('total');

  const countries = [
    { code: 'RUS', gold: 13, silver: 11, bronze: 9, total: 33 },
    { code: 'USA', gold: 9, silver: 7, bronze: 12, total: 28 },
    { code: 'NOR', gold: 11, silver: 5, bronze: 10, total: 26 },
    { code: 'CAN', gold: 10, silver: 10, bronze: 5, total: 25 },
    { code: 'NED', gold: 8, silver: 7, bronze: 9, total: 24 },
  ];

  const sortedCountries = [...countries].sort((a, b) => {
    const primaryDiff = b[sortType] - a[sortType];
    if (primaryDiff !== 0) return primaryDiff;
    const goldDiff = b.gold - a.gold;
    if (goldDiff !== 0) return goldDiff;
    return a.code.localeCompare(b.code);
  });

  const handleSortChange = (newSortType: SortType) => {
    setSortType(newSortType);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h1 className="text-2xl font-light text-gray-400 mb-6 tracking-wide">
          MEDAL COUNT
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 text-gray-400 font-normal"></th>
                <th className="text-left py-3 text-gray-400 font-normal"></th>
                <th
                  className="text-center py-3 text-gray-400 font-normal cursor-pointer hover:bg-gray-50"
                  onClick={() => handleSortChange('gold')}
                  title="Sort by Gold medals"
                >
                  <div
                    className={`w-6 h-6 rounded-full mx-auto ${
                      sortType === 'gold' ? 'bg-yellow-500' : 'bg-yellow-400'
                    }`}
                  ></div>
                </th>
                <th
                  className="text-center py-3 text-gray-400 font-normal cursor-pointer hover:bg-gray-50"
                  onClick={() => handleSortChange('silver')}
                  title="Sort by Silver medals"
                >
                  <div
                    className={`w-6 h-6 rounded-full mx-auto ${
                      sortType === 'silver' ? 'bg-gray-500' : 'bg-gray-400'
                    }`}
                  ></div>
                </th>
                <th
                  className="text-center py-3 text-gray-400 font-normal cursor-pointer hover:bg-gray-50"
                  onClick={() => handleSortChange('bronze')}
                  title="Sort by Bronze medals"
                >
                  <div
                    className={`w-6 h-6 rounded-full mx-auto ${
                      sortType === 'bronze' ? 'bg-yellow-900' : 'bg-yellow-800'
                    }`}
                  ></div>
                </th>
                <th
                  className="text-center py-3 text-gray-500 font-medium cursor-pointer hover:bg-gray-50"
                  onClick={() => handleSortChange('total')}
                  title="Sort by Total medals"
                >
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedCountries.map((country, index) => (
                <tr
                  key={country.code}
                  className={
                    index < sortedCountries.length - 1
                      ? 'border-b border-gray-200'
                      : ''
                  }
                >
                  <td className="py-3 text-gray-500 font-medium">
                    {index + 1}
                  </td>
                  <td className="py-3">
                    <span className="text-gray-600 font-medium">
                      {country.code}
                    </span>
                  </td>
                  <td className="text-center py-3 text-gray-700 font-medium">
                    {country.gold}
                  </td>
                  <td className="text-center py-3 text-gray-700 font-medium">
                    {country.silver}
                  </td>
                  <td className="text-center py-3 text-gray-700 font-medium">
                    {country.bronze}
                  </td>
                  <td className="text-center py-3 text-gray-900 font-bold">
                    {country.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
