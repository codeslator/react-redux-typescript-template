import { CounterState } from './state';
import { PayloadAction } from '@reduxjs/toolkit';

export const incrementCounter = (state: CounterState) => {
  state.counter += 1;
};

export const decrementCounter = (state: CounterState) => {
  state.counter -= 1;
};

export const incrementCounterBy = (state: CounterState, { payload }: PayloadAction<number>) => {
  state.counter += payload;
};