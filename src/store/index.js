import { configureStore } from "@reduxjs/toolkit"
//两种方式配置不同的reducer
import homeReducer from "./modules/home"
import entireReducer from "./modules/entire"
import detailReducer from "./modules/detail"

const store = configureStore({
  reducer:{
    home:homeReducer,
    entire:entireReducer,
    detail:detailReducer
  },
})

export default store
