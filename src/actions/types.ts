import { IAction, Todo } from './todos';

export enum ActionTypes {
  fetchTodos = 'FETCH_TODOS',
  deleteTodo = 'DELETE_TODO',
}

export type Action =
  | IAction<ActionTypes.fetchTodos, Todo[]>
  | IAction<ActionTypes.deleteTodo, number>;
