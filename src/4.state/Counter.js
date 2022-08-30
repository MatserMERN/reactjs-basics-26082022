import React, { Component } from 'react'

export class Counter extends Component {
    constructor(){
        super()

        this.state = {
            count: 0
        }
    }

    incrementCount(){
        // this.state.count = this.state.count + 1
        // console.log(this.state.count)
        this.setState({
            count: this.state.count + 1
        }, () => console.log(this.state.count))
       
    }
  render() {
    console.log(`Render method is called`)
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button className="btn btn-primary"
                onClick={() => this.incrementCount()}
        >Increment</button>
      </div>
    )
  }
}

export default Counter