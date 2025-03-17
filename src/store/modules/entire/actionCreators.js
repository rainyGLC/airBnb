import * as actionTypes from "./constants"
import { getEntireRoomList } from '@/services/modules/entire'

export const changeCurrentPageActin = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})
export const changeRoomsListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})

export const fetchRoomListAction = (page = 0) => {
  //新的函数
  return async (dispatch,getState) => {
    //0.修改currentPage
    dispatch(changeCurrentPageActin(page))

    //1. 根据页面获取最新的数据
    // const currentPage = getState().entire.currentPage
    console.log("currentPage: ", page);
    dispatch(changeIsLoadingAction(true))
    const res = await getEntireRoomList(page * 20)
    dispatch(changeIsLoadingAction(false))
    //2. 获取到最新的数据，保存到redux的store中
    const roomList = res.list
    const totalCount = res.totalCount
    dispatch(changeRoomsListAction(roomList))
    dispatch(changeTotalCountAction(totalCount))
  }
}

