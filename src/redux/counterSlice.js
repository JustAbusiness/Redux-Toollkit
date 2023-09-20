import { Types } from './../Types'
import { createSlice } from '@reduxks/toolkit'

// SỬ DỤNG REACT TOOLKIT
const initialState = {
  count: 1
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCount: (state, action) => {
      state.count += action.payload
    },

    decrementCount: (state, action) => {
      state.count -= action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { incrementCount, decrementCount } = counterSlice.actions

export default counterSlice.reducer
