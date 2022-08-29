import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';

const url = 'https://jsonplaceholder.typicode.com/todos';

interface Response extends AxiosResponse {
  data: [{ userId: number; id: number; title: string; completed: boolean }];
}

interface CustomDispatch extends Dispatch {
  type: string;
  payload: Response;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response: Response = await axios.get(url);
    dispatch({ type: 'FETCH_TODOS', payload: response.data });
  };
};
