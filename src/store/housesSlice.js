import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { urls } from "../constants"

export const getHouses = createAsyncThunk(
  "houses/getHouses",
  async (options = { page: 1, max: 9 }, { rejectWithValue }) => {
    const { page, max } = options
    try {
      const res = await fetch(`${urls.apartments}?_page=${page}&_limit=${max}`)
      const data = await res.json()
      const items = res.headers.get("X-Total-Count")

      let loadMore = true
      if (page * max >= items) {
        loadMore = false
      }

      return { data, loadMore }
    } catch (err) {
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
    byType: "",
    byCity: "",
    cities: [],
    types: [],
  },
}

export const housesSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    setHousesByCity: (state, action) => {
      state.houses.byCity = action.payload
    },
    setHousesByType: (state, action) => {
      state.houses.byType = action.payload
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

          if (!state.houses.cities.includes(house.city)) {
            state.houses.cities.push(house.city)
          }

          if (!state.houses.types.includes(house.type)) {
            state.houses.types.push(house.type)
          }
        }
      })
    })
    builder.addCase(getHouses.rejected, (state, action) => {
      state.reqStatus = action.error.message
    })
  },
})

export const { setHousesByCity, setHousesByType } = housesSlice.actions
export default housesSlice.reducer
