// import React from 'react'

// const Child = (props) => {

//   return (
//     <div>
//         <button className="btn btn-primary"
//                 onClick={() => props.callParent('child')}
//         >Call Parent</button>
//     </div>
//   )
// }

// export default Child

import React, { Component } from 'react'

export class Child extends Component {
  render() {
    console.log(this.props.value.state)
    return (
      <div>Child</div>
    )
  }
}

export default Child