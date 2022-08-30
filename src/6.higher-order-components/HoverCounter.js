import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'
export class HoverCounter extends Component {
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
        <h1 onMouseOver={() => addCount()}>{name} hovered {count} times</h1>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter)