import axios from 'axios';

export function createProject(project) {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/projects', project);
      dispatch({ type: 'CREATE_PROJECT', project: response.data });
    } catch (error) {
      console.error(error);
    }
  };
}

export function updateProject(project) {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/api/projects/${project.id}`, project);
      dispatch({ type: 'UPDATE_PROJECT', project: response.data });
    } catch (error) {
      console.error(error);
    }
  };
}

export function deleteProject(projectId) {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/projects/${projectId}`);
      dispatch({ type: 'DELETE_PROJECT', projectId });
    } catch (error) {
      console.error(error);
    }
  };
}