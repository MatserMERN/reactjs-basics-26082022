import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

export class ClassCounter extends Component {
    // constructor(){
    //     super()

    //     this.state = {
    //         count: 0
    //     }
    // }

    // addCount(){
    //     this.setState({
    //         count: this.state.count +1
    //     })
    // }
  render() {
    const {name, count, addCount} = this.props
    return (
      <div>
        <h1>{name} Clicked {count} times</h1>
        <button className="btn btn-primary"
                onClick={()=> addCount()}
        >Add Count</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClassCounter)