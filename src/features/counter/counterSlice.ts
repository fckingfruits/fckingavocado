import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 2,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementBy: (state, action: PayloadAction<number>) => {
      state.count += action.payload
    },
  },
})

export const { incrementBy } = counterSlice.actions

export default counterSlice.reducer
