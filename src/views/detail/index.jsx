import React, { memo } from 'react'
import { useSelector } from 'react-redux'

const Detail = memo(() => {
  const {detailInfo} = useSelector((state)=>({
    detailInfo: state.detail.detailInfo,
  }))
  return (
    <div>
      <h2>{detailInfo.name}</h2>
    </div>
  )
})

export default Detail