import PropTypes from 'prop-types'
import React, { memo,useState,useCallback } from 'react'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import { SectionV2Wrapper } from './style'
import SectionFooter from '@/components/section-footer'


const HomeSectionV2 = memo((props) => {
  // 从props中获取数据
  const { infoData } = props

  // 定义内部的数据
  // const [name,setName] = useState("佛山")
  //  Object.values(data || {});
  //另一种方法是使用逻辑或操作符 || 给 data 设置一个默认值 {}，
  // 这样即使 data 为 undefined 或 null，Object.values 也能正常工作。
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name,setName] = useState(initialName)

  const tabNames = infoData.dest_address?.map((item) => item.name)
  // 事件处理函数
  const tabClickHandle = useCallback(function(index,name){
    setName(name)
  },[])




  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.33333%" />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2