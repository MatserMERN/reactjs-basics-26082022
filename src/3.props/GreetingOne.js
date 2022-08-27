import React from 'react'

const GreetingOne = (props) => {
    // props.department ="Some Department" // This is not allowed
    let {id, name, isAdmin, department ="Hello", grade="A", address, getMessage, getData, getInfo, subjects} = props
  return (
    <div>
        <h3>Id: {id}</h3>
        <h3>Name: {name}</h3>
        <h3>IsAdmin: {isAdmin? "True": "False"}</h3>
        <h3>department: {department !=null? department : "No Department Details are available"}</h3>
        <h3>Grade: {grade != undefined ? grade: "No Grade Details are available"}</h3>
        <h3>City: {address.city}</h3>
        <h3>Country: {address.country}</h3>
        <h3>getMessage: {getMessage()}</h3>
        <h3>getData: {getData()}</h3>
        <h3>getInfo: {getInfo()}</h3>
        <h3>subjects: {subjects[0]}</h3>
    </div>
  )
}

export default GreetingOne