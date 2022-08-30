import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandler(){
        console.log(this)
        console.log("Button Clicked - Class")
    }

    clickHanlderWithParams(firstName, lastName){
        console.log(this)
        console.log("FirstName :" , firstName)
        console.log("lastName :" , lastName)
    }
  render() {
    return (
      <div>
        <button type="button" 
                className="btn btn-primary"
                onClick={this.clickHandler} 
        >Click</button> 
        &emsp;
        <button type="button" 
                className="btn btn-warning"
                onClick={() => this.clickHanlderWithParams("Scott", "Desatnick")} 
        >Click Params</button> 
      </div>
    )
  }
}

export default ClassClick