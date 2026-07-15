import React, { useState } from 'react'
import Counter from './Counter'

const App = () => {

  const [num, setNum] = useState(21)
  const [userName, setUserName] = useState('Ashmit')
  const [obj, setobj] = useState({user:'bhaukal', age:19})


  const changeNum = () => {
    console.log('State changed');
    setNum(20)
    setUserName('Aditi')
    setobj(prev=>({...prev,age:30}))
    
  }

  return (
    <div className='div'>
      <h1>My name : {userName} <br/> My age : {num}</h1>
      <h1>{obj.user} <br/> {obj.age}</h1>
      <button onClick={changeNum} className='btn'>Click</button>
      <Counter />
    </div>
  )
}

export default App
