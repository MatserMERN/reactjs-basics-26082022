import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(){
        super()

        this.state = {
            message: "Hello"
        }

        this.state.message ="How are you"

        //3rd way 
       // this.changeMessage = this.changeMessage.bind(this)
    }

    // changeMessage(){
    //     console.log(this)
    //     this.setState({
    //         message: "Thank you"
    //     })
    // }
    changeMessage = () =>{
        console.log(this)
        this.setState({
            message: "Thank you"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button className="btn btn-primary" onClick={this.changeMessage}>Change</button> */}

        {/* 1st Way */}
        {/* <button className="btn btn-primary" onClick={this.changeMessage.bind(this)}>Change</button> */}

        {/* 2nd Way */}
        {/* <button className="btn btn-primary" onClick={() => this.changeMessage()}>Change</button> */}


        {/* 3rd Way */}
        {/* <button className="btn btn-primary" onClick={this.changeMessage}>Change</button> */}

        
        {/* 3rd Way */}
        <button className="btn btn-primary" onClick={this.changeMessage}>Change</button>
      </div>
    )
  }
}

export default EventBind