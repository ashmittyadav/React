import React from 'react'
import { ArrowUpRight } from 'lucide-react';
const LeftText = () => {
  return (
    <div className='h-full w-1/4 flex-col justify-between flex'>
      <div>
        <h5 className='font-bold text-5xl py-10'>Prospective<br /> <span className='text-gray-400'>customer</span><br /> segmentation</h5>
        <p className='text-xl py-5'>Depending on customer satisfaction and access tp banking products, potential target audience can be divided into three groups</p>
      </div>
      <div className=''>
        <ArrowUpRight size={64} />
      </div>
    </div>
  )
}

export default LeftText
