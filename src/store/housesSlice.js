// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import { urls } from "../constants"

// export const getHouses = createAsyncThunk(
//   "houses/getHouses",
//   async (options = { page: 1, max: 9 }, { rejectWithValue }) => {
//     const { page, max } = options
//     try {
//       // Paginate: Use _page and optionally _limit to paginate returned data.
//       // Slice: Add _start and _end or _limit (an X-Total-Count header is included in the response)
//       const res = await fetch(`${urls.apartments}?_page=${page}&_limit=${max}`)
//       const data = await res.json()
//       const totalItems = res.headers.get("X-Total-Count")
//       const loadMore = page * max <= totalItems
//       return { data, loadMore }
//     } catch (err) {
//       console.log(err)
//       return rejectWithValue(`Error while getting houses: ${err}`)
//     }
//   }
// )

// // export const getHouses = createAsyncThunk(
// //   "houses/getHouses",
// //   async (options = { page: 1, max: 9 }) => {
// //     const { page, max } = options
// //     try {
// //       const response = await fetch(`${urls.apartments}?_page=${page}&_limit=${max}`)
// //       console.log(response)
// //       const data = await response.json()
// //       const totalItems = res.headers.get("X-Total-Count")

// //       const hasMoreItems = page * max <= totalItems

// //       return { data, hasMoreItems }
// //     } catch (error) {
// //       console.log(err)
// //     }
// //   }
// // )

// const initialState = {
//   reqStatus: "initial",
//   hasMoreItems: true,
//   houses: {
//     byId: {},
//     allIds: [],
//     byType: [],
//     byCity: [],
//   },
// }

// export const housesSlice = createSlice({
//   name: "houses",
//   initialState,
//   reducers: {
//     setHousesByCity: (state, action) => {
//       state.houses.byCity = action.payload ? action.payload : null
//     },
//     setHousesByType: (state, action) => {
//       state.houses.byType = action.payload ? action.payload : null
//     },
//   },

//   extraReducers: (builder) => {
//     builder.addCase(getHouses.pending, (state) => {
//       state.reqStatus = "loading"
//     })
//     builder.addCase(getHouses.fulfilled, (state, action) => {
//       state.reqStatus = "success"
//       state.hasMoreItems = action.payload.hasMoreItems

//       action.payload.data.forEach((house) => {
//         state.houses.byId[house.id]
//         state.houses.byId[house.id] = house

//         if (!state.houses.allIds.includes(house.id)) {
//           state.houses.allIds.push(house.id)

//           if (!state.houses.byType.includes(house.type)) {
//             state.houses.byType.push(house.type)
//           }
//           if (!state.houses.byCity.includes(house.city)) {
//             state.houses.byCity.push(house.city)
//           }
//         }
//       })
//     })
//     builder.addCase(getHouses.rejected, (state) => {
//       state.reqStatus = "failed"
//     })
//   },
// })

// // Action creators are generated for each case reducer function
// export const { setHousesByCity, setHousesByType } = housesSlice.actions

// export default housesSlice.reducer

// ---------
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { urls } from "../constants"

export const getHouses = createAsyncThunk(
  "houses/getHouses",
  async (options = { page: 1, max: 9 }, { rejectWithValue }) => {
    const { page, max } = options
    try {
      const res = await fetch(`${urls.apartments}?_page=${page}&_limit=${max}`)
      const data = await res.json()
      // Add _start and _end or _limit (an X-Total-Count header is included in the response)
      const items = res.headers.get("X-Total-Count")

      let loadMore = true
      if (page * max >= items) {
        loadMore = false
      }

      return { data, loadMore }
    } catch (err) {
      console.log("Error loading the houses list: ", err)
      return rejectWithValue("Error loading the houses list")
    }
  }
)

const initialState = {
  reqStatus: "initial",
  loadMore: true,
  houses: {
    byId: {},
    allIds: [],
    cities: [],
    types: [],
  },
}

export const housesSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    setHousesByCity: (state, action) => {
      state.houses.filterByCity = action.payload ? action.payload : null
    },
    setHousesByType: (state, action) => {
      state.houses.filterByType = action.payload ? action.payload : null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHouses.pending, (state) => {
      state.reqStatus = "loading"
    })

    builder.addCase(getHouses.fulfilled, (state, action) => {
      state.reqStatus = "success"

      state.loadMore = action.payload.loadMore

      action.payload.data.forEach((house) => {
        state.houses.byId[house.id] = house

        if (!state.houses.allIds.includes(house.id)) {
          state.houses.allIds.push(house.id)

          if (!state.houses.types.includes(house.type)) {
            state.houses.types.push(house.type)
          }

          if (!state.houses.cities.includes(house.city)) {
            state.houses.cities.push(house.city)
          }
        }
      })
    })
    builder.addCase(getHouses.rejected, (state) => {
      state.reqStatus = "failed"
    })
  },
})

export const { setHousesByCity, setHousesByType } = housesSlice.actions
export default housesSlice.reducer
