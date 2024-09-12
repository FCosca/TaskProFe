// mock.js
import defaultUserImage from './img/userdefault.jpg';


const dashboardData = {
    title: 'Dashboard',
    description: 'Welcome to the dashboard!',
    links: [
      { label: 'Project', url: '/project' },
      { label: 'Task Manager', url: '/task-manager' },
      { label: 'Resource Chart', url: '/resource-chart' },
      { label: 'Settings', url: '/settings' },
    ],
  };
  
  const projectData = {
    title: 'Project',
    description: 'This is a project page!',
    tasks: [
      { id: 1, title: 'Task 1', description: 'This is task 1' },
      { id: 2, title: 'Task 2', description: 'This is task 2' },
      { id: 3, title: 'Task 3', description: 'This is task 3' },
    ],
  };
  
  const taskManagerData = {
    title: 'Task Manager',
    description: 'This is a task manager page!',
    tasks: [
      { id: 1, title: 'Task 1', description: 'This is task 1' },
      { id: 2, title: 'Task 2', description: 'This is task 2' },
      { id: 3, title: 'Task 3', description: 'This is task 3' },
    ],
  };
  
  const resourceChartData = {
    title: 'Resource Chart',
    description: 'This is a resource chart page!',
    resources: [
      { id: 1, title: 'Resource 1', description: 'This is resource 1' },
      { id: 2, title: 'Resource 2', description: 'This is resource 2' },
      { id: 3, title: 'Resource 3', description: 'This is resource 3' },
    ],
  };
  
  const settingsData = {
    title: 'Settings',
    description: 'This is a settings page!',
    settings: [
      { id: 1, title: 'Setting 1', description: 'This is setting 1' },
      { id: 2, title: 'Setting 2', description: 'This is setting 2' },
      { id: 3, title: 'Setting 3', description: 'This is setting 3' },
    ],
  };

  const userData = {
    title: 'Users',
    description: 'This is a user page!',
    user: {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example',
      image: defaultUserImage, // Passa l'immagine come proprietà dell'oggetto user
    },
  };


  export {
    dashboardData,
    projectData,
    taskManagerData,
    resourceChartData,
    settingsData,
    userData,
  };