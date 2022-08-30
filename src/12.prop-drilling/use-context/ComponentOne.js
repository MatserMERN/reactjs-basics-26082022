import { useState } from "react";
import React from 'react'

const ComponentOne = () => {
  const [name, setName] = useState("Scott Desatnick")
  return (
    <React.Fragment>
      <h1>Hello {name}</h1>
      <ComponentTwo name={name} />
    </React.Fragment>
  )
}


const ComponentTwo = ({ name }) => {
  return (
    <React.Fragment>
      <h1>ComponentTwo</h1>
      <ComponentThree name={name} />
    </React.Fragment>
  )
}

const ComponentThree = ({ name }) => {
  return (
    <React.Fragment>
      <h1>ComponentThree</h1>
      <ComponentFour name={name} />
    </React.Fragment>
  )
}

const ComponentFour = ({ name }) => {
  return (
    <React.Fragment>
      <h1>ComponentFour</h1>
      <ComponentFive name={name} />
    </React.Fragment>
  )
}

const ComponentFive = ({ name }) => {
  console.log('Hey')
  return (
    <React.Fragment>
      <h1>Hello {name}</h1>
    </React.Fragment>
  )
}


export default ComponentOne