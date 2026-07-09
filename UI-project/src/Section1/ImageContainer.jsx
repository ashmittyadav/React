import React from 'react'
import { ArrowRight } from 'lucide-react';

const ImageContainer = (props) => {
  return (
  //   <div className='relative w-80 rounded-4xl justify-between overflow-hidden ml-10 '>
  //     <img src={props.img} className= 'w-full h-full  object-cover justify-center flex' ></img>
  //     <div className=' absolute top-10 left-8 text-2xl font-bold w-10 h-10 flex items-center justify-around rounded-full bg-white'>
  //       {props.number }
  //     </div>
  //      <div className="p-10 flex flex-col mb-30 absolute bottom-5 left-4">
  //   <p className="text-white text-lg ">
  //     {props.message}
  //   </p>
  // </div>
  // <button className='absolute bottom-10 left-10 text-white bg-blue-500 text-xl rounded-full p-2'>{props.status}</button>
  // <button><ArrowRight /></button>
  //   </div>


  <div className='w-80 h-full shrink-0 relative overflow-hidden rounded-4xl '>
     <img src={props.img} className= 'w-full h-full  object-cover justify-center flex' alt =''></img>
     <div className='absolute left-0 top-0 flex flex-col justify-between p-8 h-full w-full'>
      <h2 className='text-2xl rounded-full h-10 w-10 bg-white flex justify-center items-center'>
        {props.number}
      </h2>
      <div className='text-white text-xl leading-relaxed'>
        <p className='mb-14'>
          {props.message}
        </p>
        <div className='flex justify-between'>
          <button className=' bg-blue-500 rounded-full font-medium px-8 py-2 '>
            {props.status}
          </button>
          <button className=' bg-blue-500 rounded-full px-3 py-2'>
            <ArrowRight />
          </button>
        </div>
      </div>
     </div>
  </div>
  )
}

export default ImageContainer