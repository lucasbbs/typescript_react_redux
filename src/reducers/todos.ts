import { Todo, IAction, ActionTypes } from '../actions';

export const todosReducer = (
  state: Todo[] = [],
  action: IAction<ActionTypes, Todo[]>
) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;

    case ActionTypes.deleteTodo:
      return action.payload;
    default:
      return state;
  }
};
