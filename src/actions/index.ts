import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

const url = 'https://jsonplaceholder.typicode.com/todos';

interface Todo {
  data: { userId: number; id: number; title: string; completed: boolean };
}

interface CustomDispatch extends Dispatch {
  type: string;
  payload: Todo;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);
    dispatch({ type: ActionTypes.fetchTodos, payload: response.data });
  };
};
