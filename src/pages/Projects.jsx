import React, { useState } from 'react';
import { mockProjects } from '../utils/mockData';
import ProjectForm from '../components/ProjectForm';
import ProjectCard from '../components/ProjectCard';
import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const [projects, setProjects] = useState(mockProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddProject = (newProject) => {
    setProjects(prev => [...prev, { ...newProject, id: Date.now() }]);
    setIsFormVisible(false);
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-gray-50 to-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">Projects</h1>
      
      {!isFormVisible && (
        <button 
          onClick={() => setIsFormVisible(true)}
          className="mb-6 flex items-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-md"
        >
          <PlusCircleIcon className="w-5 h-5 mr-2" />
          Add New Project
        </button>
      )}

      {isFormVisible && (
        <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Add New Project</h2>
          <ProjectForm onSubmit={handleAddProject} />
          <button 
            onClick={() => setIsFormVisible(false)}
            className="mt-4 text-gray-600 hover:text-gray-800 flex items-center"
          >
            <XCircleIcon className="w-5 h-5 mr-2" />
            Cancel
          </button>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} onViewDetails={handleViewDetails} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
