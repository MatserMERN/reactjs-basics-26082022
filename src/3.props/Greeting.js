import React from 'react'

const Greeting = (props) => {
    const {name, skill} = props
  return (
    <div>
        <h1> {name} is really good with {skill}</h1>
    </div>
  )

      // <React.Fragment>
    //     <div></div>
    //     <div>Routing</div>
    // </React.Fragment>
    // <>
    //     <div></div>
    //     <div>Routing</div>
    // </>
}

export default Greeting