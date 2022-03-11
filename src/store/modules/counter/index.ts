import { createSlice } from "@reduxjs/toolkit";
import { counterState } from "./state";
import * as counterReducers from './reducer';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: counterState,
  reducers: counterReducers
});

export const { incrementCounter, decrementCounter, incrementCounterBy } = counterSlice.actions;
export default counterSlice.reducer;