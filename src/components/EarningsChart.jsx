import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartBarIcon } from '@heroicons/react/24/outline';

const EarningsChart = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
      {/* Header with Icon */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center space-x-2">
          <ChartBarIcon className="h-6 w-6 text-indigo-600" />
          <span>Earnings Overview</span>
        </h2>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300" />
          <XAxis dataKey="month" tick={{ fill: '#4B5563' }} />
          <YAxis tick={{ fill: '#4B5563' }} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#F9FAFB', borderColor: '#E5E7EB' }} 
            cursor={{ fill: '#E5E7EB' }}
          />
          <Bar dataKey="earnings" fill="#4F46E5" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsChart;
