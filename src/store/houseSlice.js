import { createSlice } from "@reduxjs/toolkit"

const initialState = { houses: [] }

const houseSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    updateHouses(state, action) {
      state.houses = action.payload
    },
  },
})

export const { updateHouses } = houseSlice.actions
export default houseSlice.reducer
