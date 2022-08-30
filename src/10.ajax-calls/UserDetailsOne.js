import React, { useState, useEffect } from 'react'
import {useParams} from "react-router-dom"
import { fakeUserApi } from '../api-store/fakeUserApi'

const UserDetailsOne = () => {
    const [user, setUser] = useState({})
    const {id} = useParams()

    useEffect(() => {
        fakeUserApi.get(`/users/${id}`)
        .then(response => setUser(response.data))
    },[])

    if (Object.keys(user).length == 0) {
        return <div>Loading....</div>
      } else {
        return (
          <div className="container">
            <h1>User Detail Page</h1>
            <table className="table">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{user.name}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>{user.address?.city}</td>
                </tr>
                <tr>
                  <th>Zipcode</th>
                  <td>{user.address?.zipcode}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>{user.phone}</td>
                </tr>
                <tr>
                  <th>Website</th>
                  <td>{user.website}</td>
                </tr>
                <tr>
                  <th>Company</th>
                  <td>{user.company?.name}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )
      }
}

export default UserDetailsOne