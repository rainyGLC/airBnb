import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'

const SectionFooter = memo((props) => {
  const { name } = props
  let showMessage = "显示更多"
  if(name) {
    showMessage = `显示${name}更多`
  }
  // 事件处理的逻辑
  const navigate = useNavigate()
  function moreClickHandle(){
    // 跳转到整个城市的页面
    navigate("/entire")
  }
  return (
    <FooterWrapper color={name ? "#00848A" :"#000"}>
      <div className='info' onClick={moreClickHandle}>
        <span className='text'>{showMessage}</span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name:PropTypes.string
}

export default SectionFooter