import React, { Component } from 'react'
import axios from "axios"
import { fakeUserApi } from '../api-store/fakeUserApi'
import { WithRouter } from './withRouter'

 export class UserDetails extends Component {
  constructor() {
    super()

    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    fakeUserApi.get("/users/1")
      .then(response => this.setState({ user: response.data }))
  }

  render() {
    console.log(this.state.user)
    if (Object.keys(this.state.user).length == 0) {
      return <div>Loading....</div>
    } else {
      return (
        <div className="container">
          <h1>User Detail Page</h1>
          <table className="table">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{this.state.user.name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{this.state.user.email}</td>
              </tr>
              <tr>
                <th>City</th>
                <td>{this.state.user.address?.city}</td>
              </tr>
              <tr>
                <th>Zipcode</th>
                <td>{this.state.user.address?.zipcode}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{this.state.user.phone}</td>
              </tr>
              <tr>
                <th>Website</th>
                <td>{this.state.user.website}</td>
              </tr>
              <tr>
                <th>Company</th>
                <td>{this.state.user.company?.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }

  }
}

export default UserDetails 