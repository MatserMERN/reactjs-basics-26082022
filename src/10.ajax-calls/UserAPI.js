import React, { Component } from 'react'
import axios from "axios"
import { fakeUserApi } from '../api-store/fakeUserApi'
import {Link} from "react-router-dom"

export class UserAPI extends Component {
    constructor(){
        super()

        this.state ={
            users: []
        }
    }

    componentDidMount(){
        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then(response => response.json())
        // .then(data =>this.setState({users: data}) )

        fakeUserApi.get("/users")
        .then(response =>this.setState({users: response.data}) )
    }
  render() {
    return (
      <div className="container">
        <h1>User List</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Zipcode</th>
                    <th>Latitude</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {
                   this.state.users.map(user => (
                    <tr key={user.id}>
                        <td>
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                        </td>
                        <td>
                            <a href={`mailto:${user.email}`}>{user.email}</a>
                        </td>
                        <td>{user.address.city}</td>
                        <td>{user.address.zipcode}</td>
                        <td>{user.address.geo.lat}</td>
                        <td>
                            <a href={`tel:+${user.phone}`}>{user.phone}</a>
                        </td>
                        <td>
                            <a href={`http://${user.website}`} target="_blank">{user.website}</a>
                        </td>
                        <td>{user.company.name}</td>
                    </tr>
                   )) 
                }
            </tbody>
        </table>
      </div>
    )
  }
}

export default UserAPI