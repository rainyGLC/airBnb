// import PropTypes from 'prop-types'
import React, { memo,useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from'react-redux'
import { RoomsWrapper } from './style'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo((props) => {
  // 从redux中获取roomList的数据
  const { roomList,totalCount, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }),shallowEqual)

  // 事件处理
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClickHandle = useCallback((item)=>{
    console.log("item=====>:",item)
    // 把item的数据保存到Reducer中
    dispatch(changeDetailInfoAction(item))

    navigate("/detail")
  },[navigate])


  return (
    <RoomsWrapper>
      <h2 className='title'>共{totalCount}多处住所</h2>
      <div className='list'>
        {
          roomList.map(item => {
            return (
              <RoomItem
                itemData={item}
                itemWidth="20%"
                key={item._id}
                itemClick={itemClickHandle}
              ></RoomItem>
            )
          })
        }
      </div>
      { isLoading && <div className='cover'></div>}

    </RoomsWrapper>
  )
})

// EntireRooms.propTypes = {}

export default EntireRooms