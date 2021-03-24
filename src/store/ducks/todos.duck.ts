/* eslint-disable */
// Arquivo de exemplo e ajuda sem tipagens e interfaces
import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from 'store';
import { Error, Todo, TodoInitialState } from 'Protocols';

const INITIAL_STATE: TodoInitialState = {
  todos: [],
  isLoading: false,
  error: { status: false, message: '' },
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: INITIAL_STATE,
  reducers: {
    setTodos: (state, { payload }: PayloadAction<Todo[]>) => ({
      ...state,
      todos: [...payload],
    }),
    addTodo: (state, { payload }: PayloadAction<Todo>) => ({
      ...state,
      todos: [...state.todos, payload],
    }),
    setError: (state, { payload }: PayloadAction<Error>) => ({
      ...state,
      error: { ...payload },
    }),
  },
});

export const { setTodos, setError, addTodo } = todoSlice.actions;

export default todoSlice.reducer;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getTodoList = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await axios.get('http://localhost:4000/todos');
    dispatch(setTodos(data));
  } catch (error) {
    dispatch(setError({ message: error.message, status: true }));
  }
};

/** Seletor de estado do store já tipado */
export const selectTodoState = (state: RootState) => state.todoReducer;
