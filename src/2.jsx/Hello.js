import React from 'react'

// const Hello = () => {
//   return (
//     <div className="parent" id="parent-one">
//         <h1 className="child" id="child-one">Hello Scott</h1>
//     </div>
//   )
// }

const Hello = () => {
    return React.createElement('div', 
                                {className: "parent", id:"parent-one"}, 
                                React.createElement('h1', 
                                                    {className:"child", id:"child-one"}, 
                                                    "Hello Scott"))
  }

export default Hello