import React, { memo } from 'react'
import { CenterWrapper } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'

const Headercenter = memo(() => {
  return (
    <CenterWrapper>
      <div className='search-bar'>
        <div className='text'>搜索房源和体验</div>
        <span className='icon'>
          <IconSearchBar />
        </span>

      </div>
    </CenterWrapper>
  )
})

export default Headercenter