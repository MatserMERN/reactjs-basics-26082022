import React from 'react'

const TestOne = () => {
    class Greeting extends React.Component {
        render(){
           return <h1>Greetings from class</h1>
        }
    }
  return <Greeting />
}

export default TestOne