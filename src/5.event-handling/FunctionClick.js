import React from 'react'

const FunctionClick = () => {

    function clickHandler(){
        console.log("Button Clicked - Function")
    }

    function clickHanlderWithParams(firstName, lastName){
        console.log("FirstName :" , firstName)
        console.log("lastName :" , lastName)
    }
  return (
    <div>
        <h1>Event Handling</h1>
        <button type="button" 
                className="btn btn-primary"
                onClick={clickHandler} 
        >Click</button> 
        &emsp;
        <button type="button" 
                className="btn btn-warning"
                onClick={() => clickHanlderWithParams("Scott", "Desatnick")} 
        >Click Params</button> 
    </div>
  )
}

export default FunctionClick