import { CREATE_PROJECT, UPDATE_PROJECT, DELETE_PROJECT } from '../utils/constants';

const initialState = [];

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_PROJECT:
      return [...state, action.project];
    case UPDATE_PROJECT:
      return state.map((project) => {
        if (project.id === action.project.id) {
          return action.project;
        }
        return project;
      });
    case DELETE_PROJECT:
      return state.filter((project) => project.id !== action.projectId);
    default:
      return state;
  }
}