export interface TodoInitialState {
  todos: Array<Todo> | [];
  isLoading: boolean;
  error: Error;
}

export interface Todo {
  id?: number;
  title: string;
  description: string;
  done: boolean;
}

export interface Error {
  status: boolean;
  message: string;
}
