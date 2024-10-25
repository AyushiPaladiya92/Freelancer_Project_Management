import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  ChartBarIcon,
  FolderIcon,
  CreditCardIcon,
  CalendarIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <ChartBarIcon className="w-6 h-6" /> },
    { path: '/projects', label: 'Projects', icon: <FolderIcon className="w-6 h-6" /> },
    { path: '/payments', label: 'Payments', icon: <CreditCardIcon className="w-6 h-6" /> },
    { path: '/calendar', label: 'Calendar', icon: <CalendarIcon className="w-6 h-6" /> },
    { path: '/settings', label: 'Settings', icon: <CogIcon className="w-6 h-6" /> },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 text-gray-700 w-64 min-h-screen p-6 flex flex-col">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-center text-teal-600">Freelance Hub</h1>
      </div>
      <nav className="flex-grow space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-4 p-3 rounded-lg text-teal-600 font-medium transition-colors duration-200 ${
              location.pathname === item.path
                ? 'bg-teal-500 text-white shadow-md'
                : 'hover:bg-teal-100 hover:text-teal-800'
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-auto pt-8">
        <div className="bg-teal-50 p-4 rounded-lg text-center shadow-md">
          <p className="text-sm text-gray-600">Logged in as</p>
          <p className="font-semibold text-gray-800">{user.username}</p>
          <button 
            onClick={logout} 
            className="mt-4 w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
