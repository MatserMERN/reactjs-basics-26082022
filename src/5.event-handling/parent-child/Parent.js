import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
    constructor(){
        super()

        this.state = {
            name: "Parent"
        }

        this.callParent = this.callParent.bind(this)
    }

    callParent(value){
        alert(`Calling ${this.state.name} from ${value}`)
    }
  render() {
    return (
      <div>
            <Child callParent={this.callParent} value={this} />
      </div>
    )
  }
}

export default Parent