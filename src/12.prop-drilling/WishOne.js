import React from 'react'
import WishTwo from './WishTwo'
import { useState } from 'react'

const WishOne = () => {
    const [message, setMessage] = useState("Welcome to Prop Drilling")
  return (
    <div>
        <WishTwo message={message}/>
    </div>
  )
}

export default WishOne