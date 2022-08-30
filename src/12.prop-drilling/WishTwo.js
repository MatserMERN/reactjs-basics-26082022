import React from 'react'
import WishThree from './WishThree'

const WishTwo = (props) => {
  return (
    <div>
        <WishThree  message={props.message}/>
    </div>
  )
}

export default WishTwo