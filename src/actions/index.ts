import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

const url = 'https://jsonplaceholder.typicode.com/todos';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// interface FetchTodosAction {
//   type: ActionTypes.fetchTodos;
//   payload: Todo[];
// }

export interface IAction<T extends ActionTypes, P> {
  type: T;
  payload: P;
}
export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);
    dispatch<IAction<ActionTypes, Todo[]>>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};
