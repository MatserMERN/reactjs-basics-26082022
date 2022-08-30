import React from 'react'

const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component {
        constructor(){
            super()

            this.state ={
                count: 0
            }
        }

        addCount = () =>{
            console.log('add count is called')
            this.setState({
                count: this.state.count +1
            })
        }

        render(){
            return <OriginalComponent name="Scott" count={this.state.count} addCount={this.addCount}/>
        }
    }

    return NewComponent
}

export default UpdatedComponent