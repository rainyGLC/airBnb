import React, { memo,useEffect } from 'react'
import { shallowEqual, useDispatch,useSelector } from 'react-redux'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyO } from '@/utils'




const Home = memo(() => {

  // 从redux中获取数据
  // const state = useSelector((state) => ({
  //   goodPriceInfo : state.home.goodPriceInfo,
  // }),shallowEqual)

// 解构赋值
  const { goodPriceInfo,hightScoreInfo, discountInfo,recommendInfo } = useSelector((state) => ({
    goodPriceInfo : state.home.goodPriceInfo,
    hightScoreInfo: state.home.hightScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
  }),shallowEqual)

  // 派发异步的事件:发送网络请求
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchHomeDataAction())
  },[dispatch])


  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        {/* 折扣数据 isEmptyO判断是否有值 */}
        { isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo}/>}
        { isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}/>}
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData = {goodPriceInfo} />}
        {isEmptyO(hightScoreInfo) && <HomeSectionV1 infoData = {hightScoreInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home