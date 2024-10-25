import React from 'react';
import { CalendarIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 max-w-sm">
      {/* Project Title */}
      <div className="flex items-center mb-3">
        <h3 className="text-xl font-semibold text-gray-800 mr-2">{project.name}</h3>
        {project.status === 'active' ? (
          <CheckCircleIcon className="h-5 w-5 text-green-500" />
        ) : (
          <ExclamationCircleIcon className="h-5 w-5 text-gray-500" />
        )}
      </div>

      {/* Due Date */}
      <div className="flex items-center text-gray-500 mb-3">
        <CalendarIcon className="h-5 w-5 mr-2" />
        <p className="text-sm">Due: {project.dueDate}</p>
      </div>

      {/* Status Badge */}
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${
          project.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
        }`}
      >
        {project.status}
      </span>
    </div>
  );
};

export default ProjectCard;
