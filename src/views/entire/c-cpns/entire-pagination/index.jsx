// import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useSelector,useDispatch, shallowEqual } from'react-redux'
import Pagination from '@mui/material/Pagination'
import { PaginationWrapper } from './style'
// import { changeCurrentPageActin } from '@/store/modules/entire/actionCreators'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'

const EntirePagination = memo((props) => {
  const { totalCount,currentPage,roomList} = useSelector((state)=>({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }),shallowEqual)
  const totalPage = Math.ceil(totalCount/20) //向上取整
  const startCount = currentPage * 20 +1
  const endCount = (currentPage +1) *20
  //事件处理的逻辑
  const dispatch = useDispatch()
  function pageChangeHandle(event,pageCount){
    // console.log("pageCount====>:",pageCount);
    // 更新更新的页码：redux => currentPage
    // dispatch(changeCurrentPageActin(pageCount -1))
    //回到顶部

    window.scrollTo(0,0)
    dispatch(fetchRoomListAction(pageCount -1))



  }
  return (
    <PaginationWrapper>
      {
        !!roomList.length && (
          <div className='info'>
            <Pagination count={totalPage} onChange={pageChangeHandle}  />
            <div className='desc'>
              {/* currentpage:0 1-20 */}
              {/* currentPage:1 21-31 */}
              第{startCount}-{endCount}个房源,共超过{totalCount}个
            </div>
          </div>
        )
      }
    </PaginationWrapper>
  )
})

// EntirePagination.propTypes = {}

export default EntirePagination