import React from 'react';
import { taskManagerData } from '../mock';

function TaskManager() {
  return (
    <div className="task-manager">
      <h1>{taskManagerData.title}</h1>
      <p>{taskManagerData.description}</p>
      <h2>Tasks</h2>
      <ul>
        {taskManagerData.tasks.map((task, index) => (
          <li key={index}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;