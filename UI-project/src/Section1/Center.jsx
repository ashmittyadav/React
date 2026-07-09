import React from 'react'
import LeftText from './LeftContent'
import RightContent from './RightContent'


const Center = () => {
  return (
    <div className='py-3 px-16 h-[85vh] flex items-center gap-5'>
     <LeftText />
     <RightContent /> 
    </div>
  )
}

export default Center
