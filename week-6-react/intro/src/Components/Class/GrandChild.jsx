import React, { Component } from 'react'

export default class GrandChild extends Component {
    constructor(props){
        super(props)
        
        this.state = {

        }
    }
    
    render() {
        return (
            <div>
                <p>Grand Child</p>
                <p>{this.props.data}</p>
            </div>
        )
    }
}
