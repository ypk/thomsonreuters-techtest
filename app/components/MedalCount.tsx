'use client';

export function MedalCount() {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h1 className="text-2xl font-light text-gray-400 mb-6 tracking-wide">
          MEDAL COUNT
        </h1>
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="text-left py-3 text-gray-400 font-normal"></th>
              <th className="text-left py-3 text-gray-400 font-normal"></th>
              <th className="text-center py-3 text-gray-400 font-normal">
                Gold
              </th>
              <th className="text-center py-3 text-gray-400 font-normal">
                Silver
              </th>
              <th className="text-center py-3 text-gray-400 font-normal">
                Bronze
              </th>
              <th className="text-center py-3 text-gray-500 font-medium">
                TOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 text-gray-500 font-medium">1</td>
              <td className="py-3 text-gray-600 font-medium">USA</td>
              <td className="text-center py-3 text-gray-700 font-medium">9</td>
              <td className="text-center py-3 text-gray-700 font-medium">7</td>
              <td className="text-center py-3 text-gray-700 font-medium">12</td>
              <td className="text-center py-3 text-gray-900 font-bold">28</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 text-gray-500 font-medium">2</td>
              <td className="py-3 text-gray-600 font-medium">RUS</td>
              <td className="text-center py-3 text-gray-700 font-medium">13</td>
              <td className="text-center py-3 text-gray-700 font-medium">11</td>
              <td className="text-center py-3 text-gray-700 font-medium">9</td>
              <td className="text-center py-3 text-gray-900 font-bold">33</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 text-gray-500 font-medium">3</td>
              <td className="py-3 text-gray-600 font-medium">NOR</td>
              <td className="text-center py-3 text-gray-700 font-medium">11</td>
              <td className="text-center py-3 text-gray-700 font-medium">5</td>
              <td className="text-center py-3 text-gray-700 font-medium">10</td>
              <td className="text-center py-3 text-gray-900 font-bold">26</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 text-gray-500 font-medium">4</td>
              <td className="py-3 text-gray-600 font-medium">CAN</td>
              <td className="text-center py-3 text-gray-700 font-medium">10</td>
              <td className="text-center py-3 text-gray-700 font-medium">10</td>
              <td className="text-center py-3 text-gray-700 font-medium">5</td>
              <td className="text-center py-3 text-gray-900 font-bold">25</td>
            </tr>
            <tr>
              <td className="py-3 text-gray-500 font-medium">5</td>
              <td className="py-3 text-gray-600 font-medium">NED</td>
              <td className="text-center py-3 text-gray-700 font-medium">8</td>
              <td className="text-center py-3 text-gray-700 font-medium">7</td>
              <td className="text-center py-3 text-gray-700 font-medium">9</td>
              <td className="text-center py-3 text-gray-900 font-bold">24</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
