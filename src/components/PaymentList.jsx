import React from 'react';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

const PaymentList = ({ payments, onMarkPaid }) => {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        {/* Table Header */}
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="bg-white divide-y divide-gray-200">
          {payments.map((payment) => (
            <tr key={payment.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-medium">
                ${payment.amount}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={` items-center space-x-1 px-2 inline-flex text-xs font-semibold rounded-full ${
                    payment.status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {payment.status === 'paid' ? (
                    <CheckCircleIcon className="h-4 w-4" />
                  ) : (
                    <ExclamationCircleIcon className="h-4 w-4" />
                  )}
                  <span>{payment.status}</span>
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                {payment.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {payment.status === 'unpaid' && (
                  <button
                    onClick={() => onMarkPaid(payment.id)}
                    className="text-indigo-600 hover:text-indigo-800 flex items-center space-x-1"
                  >
                    <CheckCircleIcon className="h-4 w-4" />
                    <span>Mark as Paid</span>
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentList;
