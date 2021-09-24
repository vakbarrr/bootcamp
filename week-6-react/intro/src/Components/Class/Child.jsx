import React, { Component } from 'react'

export default class Child extends Component {
    
    constructor(props){
        super(props)

        this.state = {

        }
    }
    
    minBeli = 2;

    render() {
        return (
            <div>
                <h3>Child components</h3>
                <p>Total Stock : {this.props.stock}</p>
                <button onClick={()=>this.props.fungsi(this.minBeli)}>Beli</button>
            </div>
        )
    }
}
