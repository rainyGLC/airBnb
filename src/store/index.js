import { configureStore } from "@reduxjs/toolkit"
//两种方式配置不同的reducer
import homeReducer from "./modules/home"
import entireReducer from "./modules/entire"

const store = configureStore({
  reducer:{
    home:homeReducer,
    entire:entireReducer
  },
})

export default store
