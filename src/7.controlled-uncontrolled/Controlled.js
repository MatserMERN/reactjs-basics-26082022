import React, { Component } from 'react'

export class Controlled extends Component {
    constructor(){
        super()

        this.state = {
            name: "",
            email: "",
            comments: ""
        }
    }

    getFormData(){
        console.log(this.state.name)
        console.log(this.state.email)
        console.log(this.state.comments)
    }

    getUserName(event){
        this.setState({name: event.target.value})
    }

    getEmail = (event) => {
        // console.log(event)
        // console.log(event.target)
        // console.log(event.target.value)

        this.setState({email: event.target.value })
    }
  render() {
    return (
      <div className="container">
        <h1>Controlled Input</h1>
        <form>
            <div>
                <label>UserName</label>
                <input type="text" 
                       className="form-control w-50"
                    value={this.state.name}
                    onChange={(event) => this.getUserName(event)}
            />
            </div>
            <br />
            <div>
                <label>Email</label>
                <input type="email" 
                       className="form-control w-50"
                    value={this.state.email}
                    onChange={this.getEmail}
            />
            </div>
            <br />
            <div>
                <label>Comments</label>
                <textarea className="form-control w-50" 
                          rows="5"
                          value={this.state.comments}
                          onChange={(event) => this.setState({comments: event.target.value})}
                ></textarea>
            </div>
            <br />
            <button type="button" className="btn btn-primary"
                    onClick={() => this.getFormData()}
            >Submit</button>
        </form>
      </div>
    )
  }
}

export default Controlled