import React from 'react'

const Greeting = (props) => {
    const {name, skill} = props
  return (
    <div>
        <h1> {name} is really good with {skill}</h1>
    </div>
  )
}

export default Greeting