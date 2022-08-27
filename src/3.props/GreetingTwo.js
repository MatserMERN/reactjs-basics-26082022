import React, { Component } from 'react'

export class GreetingTwo extends Component {
    render() {
        let {id, name, isAdmin, department ="Hello", grade="A", address, getMessage, getData, getInfo, subjects} = this.props
        return (
            <div>
                <h3>Id: {id}</h3>
                <h3>Name: {name}</h3>
                <h3>IsAdmin: {isAdmin ? "True" : "False"}</h3>
                <h3>department: {department != null ? department : "No Department Details are available"}</h3>
                <h3>Grade: {grade != undefined ? grade : "No Grade Details are available"}</h3>
                <h3>City: {address.city}</h3>
                <h3>Country: {address.country}</h3>
                <h3>getMessage: {getMessage()}</h3>
                <h3>getData: {getData()}</h3>
                <h3>getInfo: {getInfo()}</h3>
                <h3>subjects: {subjects[0]}</h3>
            </div>
        )
    }
}

export default GreetingTwo