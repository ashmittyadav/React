import React from 'react'

const App = () => {


  function inputChange(val) {
    console.log(val);
  }

  // functions created seperartely
  // function btnClicked() {
  //   console.log("the button is clicked"); 
  // }
  
  // function mouseEntered() {
  //   console.log("mouse eneterd");
    
  // }

  return (
    <div>
      {/* <h1>hello, ashmit</h1>
      <button onClick={function() {
        console.log("button is clicked");
      }}>click me</button>
      <button onMouseEnter={function() {
        console.log("mouse entered");
        
      }}>explore this</button> */}


      <input onChange={(elem)=>{
        // console.log(elem.target.value);
        inputChange(elem.target.value)
        
      }} type="text" placeholder='Enter name'/>
    </div>
  )
}

export default App
