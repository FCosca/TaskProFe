import React, { useState } from 'react';

function Task() {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API to create new task
  };

  return (
    <div>
      <h4>Task</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Task Name:
          <input type="text" value={taskName} onChange={(event) => setTaskName(event.target.value)} />
        </label>
        <br />
        <label>
          Task Description:
          <textarea value={taskDescription} onChange={(event) => setTaskDescription(event.target.value)} />
        </label>
        <br />
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default Task;