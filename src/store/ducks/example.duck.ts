/* eslint-disable */
// Arquivo de exemplo e ajuda sem tipagens e interfaces
import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from 'store';

const INITIAL_STATE: any = {
  data: { message: '' },
  loading: false,
  error: undefined,
};

const exampleSlice = createSlice({
  name: 'example',
  initialState: INITIAL_STATE,
  reducers: {
    setSomethingHere: (state, { payload }: PayloadAction<any | undefined>) => ({
      ...state,
      data: payload,
    }),
  },
});

export const { setSomethingHere } = exampleSlice.actions;

export default exampleSlice.reducer;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const authenticateUser = (values: any) => async (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  const s = getState();
  const r = await axios.get<any>('/example');
  dispatch(setSomethingHere({ message: r }));
};

/** Seletor de estado do store já tipado */
export const selectExampleState = (state: RootState) => state.exampleReducer;
