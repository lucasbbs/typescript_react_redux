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

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export interface IAction<T extends ActionTypes, P> {
  type: T;
  payload: P;
}

export const fetchTodos = (): Function => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get<Todo[]>(url);

    dispatch<IAction<ActionTypes, Todo[]>>({
      type: ActionTypes.fetchTodos,
      payload: res.data,
    });
  };
};

export const deleteTodo = (
  id: number
): IAction<ActionTypes.deleteTodo, number> => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
