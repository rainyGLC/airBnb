import { getHomeGoodPriceData,getHomeHighScoreData,getHomeDiscountData,getHomeHotRecommendData } from "@/services";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk("fetchdata",(payload, { dispatch }) => {
  // getHomeGoodPriceData().then(res=>{
  //   console.log("res===>:",res)
  // })
  //如何state存在参数paged的话，就用const state = getState()获取
  getHomeGoodPriceData().then(res=>{
    dispatch(changeGoodPriceInfoActin(res))

  })
  getHomeHighScoreData().then(res=>{
    dispatch(changeHightScoreInfoActin(res))
  })
  getHomeDiscountData().then(res=>{
    dispatch(changeDiscountInfoActin(res))
  })

  getHomeHotRecommendData().then(res=>{
    dispatch(changeRecommendInfoActin(res))
  })



  // return res
})

const homeSlice = createSlice({
  name:"home",
  initialState:{
    goodPriceInfo:{},
    hightScoreInfo:{},
    discountInfo:{},
    recommendInfo:{}
  },
  reducers:{
    changeGoodPriceInfoActin(state,{payload}) {
      state.goodPriceInfo = payload
    },
    changeHightScoreInfoActin(state,{payload}) {
      state.hightScoreInfo = payload
    },
    changeDiscountInfoActin(state,{payload}) {
      state.discountInfo = payload
    },
    changeRecommendInfoActin(state,{payload}) {
      state.recommendInfo = payload
    }
  },
  extraReducers:(builder) => {
    // builder.addCase(fetchHomeDataAction.fulfilled,(state,{payload}) => {
    //   console.log("extraReducers===>:",payload)
    //   state.goodPriceInfo = payload
    // })
  }
})

export const {
  changeGoodPriceInfoActin,
  changeHightScoreInfoActin,
  changeDiscountInfoActin,
  changeRecommendInfoActin
} = homeSlice.actions

export default homeSlice.reducer