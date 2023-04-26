import { createStore } from 'redux';
import TodoReducer from './reducer/TodoReducer'; 

export const store = createStore(TodoReducer);

export default store;