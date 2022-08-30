import React from 'react'
import PropTypes from "prop-types"

const GreetValidate = (props) => {
    console.log(props)
  return (
    <div>
        <h1>Here we validate props for our component</h1>
    </div>
  )
}

GreetValidate.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool,
    department: PropTypes.oneOf([null, undefined]),
    department: PropTypes.instanceOf(null),
    grade: PropTypes.oneOf([null, undefined]),
    status: PropTypes.oneOf(["Loading", "Ready"]),
    address:PropTypes.shape({
        zipcode: PropTypes.number, 
        city: PropTypes.string, 
        country: PropTypes.string
    }),
    getMessage: PropTypes.func,
    subjects: PropTypes.arrayOf(PropTypes.string),
    codes: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])),
    // codes: PropTypes.arrayOf(PropTypes.oneOfType([ // This will not work as expected
    //     PropTypes.string
    // ]))
}

GreetValidate.defaultProps = {
    name: "Hello"
}

export default GreetValidate