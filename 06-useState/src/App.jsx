import React, { useState } from 'react'
import Counter from './Counter'

const App = () => {

  const [num, setNum] = useState(21)
  const [userName, setUserName] = useState('Ashmit')

  function changeNum() {
    console.log('State changed');
    setNum(20)
    setUserName('Kritika')
    
  }

  return (
    <div className='div'>
      <h1>My name : {userName} <br/> My age : {num}</h1>
      <button onClick={changeNum} className='btn'>Click</button>
      <Counter />
    </div>
  )
}

export default App
