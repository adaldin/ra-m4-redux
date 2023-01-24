import React from "react"
import ReactDOM from "react-dom/client"
import "modern-normalize/modern-normalize.css"
import App from "./App"
import { store } from "./store/store"
import { Provider } from "react-redux"

const state = store.getState()
console.log("state", state)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
