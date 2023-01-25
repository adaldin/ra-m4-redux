import { configureStore } from "@reduxjs/toolkit"
import houses from "./houses.slice"

export const store = configureStore({
  reducer: {
    houses: houseReducer,
  },
})
