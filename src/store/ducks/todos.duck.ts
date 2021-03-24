import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from 'store';
import { Error, Todo, TodoInitialState, TodoModel } from 'Protocols';

const INITIAL_STATE: TodoInitialState = {
  todos: [],
  isLoading: false,
  error: { status: false, message: '' },
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: INITIAL_STATE,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<TodoModel>) => ({
      ...state,
      todos: [
        ...state.todos,
        { ...payload, id: state.todos.length + 1, done: false },
      ],
    }),
    setTodos: (state, { payload }: PayloadAction<Todo[]>) => ({
      ...state,
      todos: [...payload],
    }),
    deleteTodo: (state, { payload }: PayloadAction<number>) => ({
      ...state,
      todos: state.todos.filter(({ id }) => id !== payload),
    }),
    setError: (state, { payload }: PayloadAction<Error>) => ({
      ...state,
      error: { ...payload },
    }),
  },
});

export const { setTodos, setError, addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;

export const getTodoList = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await axios.get('http://localhost:4000/todos');
    dispatch(setTodos(data));
  } catch (error) {
    dispatch(setError({ message: error.message, status: true }));
  }
};

export const selectTodoState = (state: RootState) => state.todoReducer;
