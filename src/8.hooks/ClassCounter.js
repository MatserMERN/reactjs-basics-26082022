import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(){
        super()

        this.state = {
            count: 0
        }
    }

    addCount(){
        this.setState({
            count: this.state.count +1
        })
    }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button className="btn btn-primary"
                onClick={()=> this.addCount()}
        >Add Count</button>
      </div>
    )
  }
}

export default ClassCounter