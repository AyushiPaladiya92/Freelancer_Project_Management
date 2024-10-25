import React from 'react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gradient-to-r from-white to-stone-100 shadow-md">
      <div className="max-w-7xl mx-auto py-3 px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Title */}
          <h1 className="text-3xl font-semibold text-gray-800">
            Freelance Dashboard
          </h1>
          
          {/* Icon and User Area */}
          <div className="flex items-center space-x-6">
            {/* Notification Icon */}
            <button className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
              <BellIcon className="h-7 w-7" />
            </button>

            {/* User Profile */}
            <div className="flex items-center space-x-3">
              <UserCircleIcon className="h-8 w-8 text-gray-700" />
              <span className="text-gray-800 font-medium">
                {user.username || 'User'}
              </span>
              <button
                onClick={logout}
                className="px-3 py-1 text-sm text-gray-600 bg-stone-200 rounded hover:bg-stone-300 transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
