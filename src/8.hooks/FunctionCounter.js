import React, {useState} from 'react'

const FunctionCounter = () => {
    console.log(useState(0))
   const [count, setCount] = useState(0)
    console.log(setCount)
   const addCount = () =>{
    setCount(count + 5)
   }
  return ( 
    <div>
        <h1>Count : {count}</h1>
        <button type="button" 
                className="btn btn-primary"
                onClick={() => addCount()}
        >Increment</button>
    </div>
  )
}

export default FunctionCounter