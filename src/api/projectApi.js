import React, { useState, useEffect } from 'react';
import { getProjects } from '../api/projectApi';

function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((response) => {
      setProjects(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Progetti</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Project;