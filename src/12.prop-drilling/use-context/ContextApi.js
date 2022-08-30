import { useState, createContext, useContext } from "react";
import React from 'react'

const UserContext = createContext()

const ContextOne = () => {

  const [name, setName] = useState("Scott Desatnick")
  return (
    <UserContext.Provider value={name}>
      <h1>Hello {name}</h1>
      <ContextTwo />
    </UserContext.Provider>
  )
}


const ContextTwo = () => {
  return (
    <React.Fragment>
      <h1>ContextTwo</h1>
      <ContextThree  />
    </React.Fragment>
  )
}

const ContextThree = () => {
  return (
    <React.Fragment>
      <h1>ContextThree</h1>
      <ContextFour  />
    </React.Fragment>
  )
}

const ContextFour = () => {
  return (
    <React.Fragment>
      <h1>ContextFour</h1>
      <ContextFive  />
    </React.Fragment>
  )
}

const ContextFive = () => {
 console.log(useContext(UserContext))
  const name = useContext(UserContext)
  return (
    <React.Fragment>
      <h1>Hello {name}</h1>
    </React.Fragment>
  )
}


export default ContextOne