import React, { memo } from 'react'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import Headercenter from './c-cpns/header-center'
import { HeaderWrapper } from './style'


const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <Headercenter />
      <HeaderRight />
    </HeaderWrapper>
  )
})

export default AppHeader