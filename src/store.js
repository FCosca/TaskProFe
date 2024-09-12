import { createStore, combineReducers } from 'redux';
import projectReducer from './reducers/projectReducer';
import taskReducer from './reducers/taskReducer';

const rootReducer = combineReducers({
  projects: projectReducer,
  tasks: taskReducer,
});

const store = createStore(rootReducer);

export default store;