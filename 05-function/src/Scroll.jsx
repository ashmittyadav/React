import React from 'react'


const pagrScrolling =() => {
    console.log("page scrolling...");
}
const Scroll = () => {
  return (
    <div onWheel={(elem)=>{
        console.log(elem.deltaY);
        
        // pageScrolling(elem.deltaY);
    }}>
        <div className='page1'></div>
        <div className='page2'></div>
        <div className='page3'></div>
      
    </div>
  )
}

export default Scroll
