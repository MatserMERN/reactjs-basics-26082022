import React, {useState} from 'react'

const HookWithString = () => {
    const [name, setName] = useState("Scott")

    const changeName = () => {
        setName("Scott Desatnick")
    }
  return (
    <div>
        <h1>Name: {name}</h1>
        <button type="button" 
                className="btn btn-primary"
                onClick={() => changeName()}
        >Change Name</button>
    </div>
  )
}

export default HookWithString