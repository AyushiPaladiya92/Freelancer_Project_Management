import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { UserIcon, AtSymbolIcon, BellIcon, SunIcon, TrashIcon } from '@heroicons/react/24/outline';

const Settings = () => {
  const { user, logout } = useAuth();
  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
    notifications: true,
    theme: 'light'
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Settings updated successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-blue-800 mb-6 text-center">Settings</h2>
        
        <div className="bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center border border-gray-300 rounded-md">
              <UserIcon className="w-5 h-5 text-gray-400 p-2" />
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Username"
                className="mt-1 block w-full rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            
            <div className="flex items-center border border-gray-300 rounded-md">
              <AtSymbolIcon className="w-5 h-5 text-gray-400 p-2" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="mt-1 block w-full rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="notifications"
                name="notifications"
                checked={formData.notifications}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="notifications" className="ml-2 block text-sm text-gray-900">
                <BellIcon className="inline w-4 h-4 text-gray-400 mr-1" />
                Receive email notifications
              </label>
            </div>
            
            <div className="flex items-center">
              <select
                id="theme"
                name="theme"
                value={formData.theme}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
              <SunIcon className="inline w-5 h-5 text-gray-400 ml-2" />
            </div>
            
            <div>
              <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
                Save Settings
              </button>
            </div>
          </form>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-blue-900 ">Danger Zone</h3>
          <p className="text-gray-600 mb-4">Permanently delete your account and all of your content.</p>
          <button onClick={logout} className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700  hover:bg-blue-800  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out">
            <TrashIcon className="inline w-5 h-5 mr-2" />
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
