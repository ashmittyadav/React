import React, { useState } from 'react'

const Counter = () => {

    const [Num, setNum] = useState(0)

    function Increase() {
        console.log('increasing by 1');
        
        setNum(Num + 1);
    }
    function Decrease() {
        console.log('decreasing by 1');
        setNum(Num - 1);
    }
    function Jump() {
        console.log('increasing by 5');
        setNum(Num + 5);
    }
    function reset() {
        console.log('reset value to 0');
        setNum(0);
    }

  return (
    <div className='mydiv'>
        <h1>{Num}</h1>
        <div className='hola'>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      
        </div>
        <div className='hii'>
        <button onClick={Jump}>Jump</button>
      <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
