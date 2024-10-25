import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon, CalendarIcon } from '@heroicons/react/24/outline';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([
    { date: new Date(2023, 5, 15), title: 'Project Deadline' },
    { date: new Date(2023, 5, 20), title: 'Client Meeting' },
  ]);

  const [newEvent, setNewEvent] = useState({ date: '', title: '' });

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (newEvent.date && newEvent.title) {
      setEvents([...events, { date: new Date(newEvent.date), title: newEvent.title }]);
      setNewEvent({ date: '', title: '' });
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-800 flex items-center gap-2 mb-6">
        <CalendarIcon className="w-8 h-8 text-blue-500" />
        Calendar
      </h2>
      
      <div className="bg-gray-50 shadow-md rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <button onClick={handlePrevMonth} className="text-blue-600 hover:text-blue-800">
            <ChevronLeftIcon className="w-6 h-6 inline-block" />
          </button>
          <h3 className="text-2xl font-semibold text-gray-700">
            {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <button onClick={handleNextMonth} className="text-blue-600 hover:text-blue-800">
            <ChevronRightIcon className="w-6 h-6 inline-block" />
          </button>
        </div>
        
        <div className="grid grid-cols-7 gap-2 text-center">
          {DAYS.map((day) => (
            <div key={day} className="font-semibold text-gray-600">{day}</div>
          ))}
          {[...Array(firstDayOfMonth).keys()].map((i) => (
            <div key={`empty-${i}`} className="h-24"></div>
          ))}
          {[...Array(daysInMonth).keys()].map((i) => {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1);
            const dayEvents = events.filter((event) => event.date.toDateString() === date.toDateString());
            return (
              <div key={i} className="h-24 p-2 border border-gray-200 bg-white rounded-md">
                <div className="font-semibold text-gray-800">{i + 1}</div>
                {dayEvents.map((event, index) => (
                  <div key={index} className="text-xs bg-blue-100 text-blue-700 rounded p-1 mt-1">
                    {event.title}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
          <PlusIcon className="w-6 h-6 text-green-500" />
          Add New Event
        </h3>
        <form onSubmit={handleAddEvent} className="space-y-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              id="date"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Event Title</label>
            <input
              type="text"
              id="title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default Calendar;
