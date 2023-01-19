import { createSlice } from "@reduxjs/toolkit"

const initialState = { hous }

const houseSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    updateHouses(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default houseSlice.reducer
