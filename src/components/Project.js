import React from 'react';
import { projectData } from '../mock';

function Project() {
  return (
    <div className="project">
      <h1>{projectData.title}</h1>
      <p>{projectData.description}</p>
      <h2>Tasks</h2>
      <ul>
        {projectData.tasks.map((task, index) => (
          <li key={index}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Project;