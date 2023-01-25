import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  houses: [],
}

export const housesSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    incrementHouses: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // console.log("old state", state.houses)
      // console.log(action.payload)
      state.houses.push(action.payload)
      // console.log("new state", state.houses)
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementHouses } = housesSlice.actions

export default housesSlice.reducer

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import { urls } from "../constants/index"

// export const getHouses = createAsyncThunk("houses/getHouses", async () => {
//   const response = await fetch(urls.apartments)
//   const data = await response.json()
//   return data
// })

// const initialState = {
//   reqStatus: "initial",
//   houses: {
//     byId: {},
//     allIDs: [],
//     types: [],
//     byType: {},
//     byCity: {},
//     cities: [],
//   },
// }

// const housesSlice = createSlice({
//   name: "houses",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getHouses.pending, (state) => {
//         state.reqStatus = "loading"
//       })
//       .addCase(getHouses.fulfilled, (state, action) => {
//         state.reqStatus = "success"
//         state.housesList.push(...action.payload)
//       })
//       .addCase(getHouses.rejected, (state) => {
//         state.reqStatus = "failed"
//       })
//   },
// })

// export const {} = housesSlice.actions
// export default housesSlice.reducer
