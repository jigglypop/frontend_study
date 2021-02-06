import { createSlice } from '@reduxjs/toolkit';

export type CounterState = {
    count: number;
}

const initialState: CounterState = {
    count: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase(state) {
        state.count += 1;
    },
    decrease(state) {
        state.count -= 1;
    }
  }
});

export const { increase, decrease } = counterSlice.actions
export default counterSlice
