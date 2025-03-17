import PropTypes from 'prop-types'
import React, { memo,useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const indicator = memo((props) => {
  const {selectIndex = 0} = props
  const contentRef =useRef()

  useEffect(() => {
    // console.log("indicator组件更新了",selectIndex);
    const selectItemEl = contentRef.current.children[selectIndex]
    const itemleft = selectItemEl.offsetLeft
    const itemWidth = selectItemEl.clientWidth

    //2.content的宽度
    const contentWidth = contentRef.current.clientWidth
    const contentScroll = contentRef.current.scrollWidth

    //3. 获取selectIndex要滚动的距离，即滚动到item的中间位置
    let distance = itemleft + itemWidth * 0.5 - contentWidth * 0.5
    console.log("distance");
    console.log(selectIndex,selectItemEl);
    //4.特殊情况的处理
    if(distance < 0) distance =  0 //左边的特殊情况处理
    const totalDistance = contentScroll - contentWidth
    if(distance > totalDistance) distance = totalDistance //右边的特殊情况处理
    //5.改变位置
    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [selectIndex])

  return (
    <IndicatorWrapper>
      {/* 需要设置i-content的css样式，需要设置定位严元素，才能获取元素的offset */}
      <div className='i-content' ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

indicator.propTypes = {
  selectIndex: PropTypes.number.isRequired
}

export default indicator