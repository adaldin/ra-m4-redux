import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { urls } from "../constants/index"

export const getHouses = createAsyncThunk("houses/getHouses", async () => {
  const response = await fetch(urls.apartments)
  const data = await response.json()
  return data
})

const initialState = {
  reqStatus: "initial",
  houses: {
    byId: {},
    allIDs: [],
    types: [],
    byType: {},
    byCity: {},
    cities: [],
  },
}

const housesSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHouses.pending, (state) => {
        state.reqStatus = "loading"
      })
      .addCase(getHouses.fulfilled, (state, action) => {
        state.reqStatus = "success"
        state.housesList.push(...action.payload)
      })
      .addCase(getHouses.rejected, (state) => {
        state.reqStatus = "failed"
      })
  },
})

export const {} = housesSlice.actions
export default housesSlice.reducer
