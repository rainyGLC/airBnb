import React, { memo,useEffect } from 'react'
import { useDispatch } from'react-redux'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
// import { getEntireRoomList } from '@/services/modules/entire'
import  { fetchRoomListAction } from '@/store/modules/entire/actionCreators'

const Entire = memo(() => {
  //发送网络请求，获取数据，并且保存当前的页面等等
  // useEffect(()=>{
  //   getEntireRoomList(0).then(res=>{
  //     console.log("res====>:",res)
  //   })
  // })

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchRoomListAction())
  },[dispatch])


  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire