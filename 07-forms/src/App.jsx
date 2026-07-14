import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHolder = (e) => {
    e.preventDefault();
    console.log('Form submitted by' , title );
    
    setTitle('')
  }
  return (
    <div className='div'>
      <form onSubmit={(e) => { 
        submitHolder(e);
      }}>
        <input 
        type="text" 
        placeholder='Enter your name'
        value = {title}
        onChange={(e)=>{  
          setTitle(e.target.value)
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
