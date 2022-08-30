import React, { Component } from 'react'

export class UnControlled extends Component {
    constructor(){
        super()

        this.state = {
            name: ""
        }

        this.username = React.createRef();
    }

    focusInputElement(){
      console.log(this.myRef.current.value)
      this.myRef.current.focus()

    }
  render() {
    return (
      <div>
          <h1>Uncontrolled Input</h1>
        <form>
          <input type="text"  className="form-control w-50" ref={this.username} /> <br />
          <button type="button" className="btn btn-primary" onClick={()=> this.focusInputElement()}>Focus</button>
        </form>
      </div>
    )
  }
}

export default UnControlled