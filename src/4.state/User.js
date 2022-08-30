import React, { Component } from 'react'

export class User extends Component {
    constructor(){
        super()

        this.state = {
            id:1,
            name: "Scott",
            isAdmin: true
        }
    }
  render() {
    const {id, name, isAdmin} = this.state
    return (
      <div>
        <h3>ID: {id}</h3>
        <h3>Name: {name}</h3>
        <h3>IsAdmin: {isAdmin ? "True" : "False"}</h3>
      </div>
    )
  }
}

export default User