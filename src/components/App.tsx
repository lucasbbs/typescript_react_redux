import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos?: Todo[];
  fetchTodos(): typeof fetchTodos;
  deleteTodo: typeof deleteTodo;
}
interface AppState {}

class _App extends React.Component<AppProps, AppState> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  renderList(): JSX.Element[] | undefined {
    return this.props.todos?.map((todo: Todo) => (
      <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
        {todo.id} - {todo.title}
      </div>
    ));
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
