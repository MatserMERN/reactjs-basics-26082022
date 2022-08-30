import React, { Component } from 'react'
import LifecycleB from './LifeCycleB'

export class LifecycleA extends Component {
    constructor(){
        super()

        this.state ={

        }

        console.log("constructor of class A")
    }

    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps of class A")
        return null
    }

    componentDidMount(){
        console.log("componentDidMount of class A")
    }

  render() {
    console.log("render of class A")
    return (
      <div>
            <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA