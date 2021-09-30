import React, { Component } from 'react'
import Child from './Child'
import Child2 from './Child2'

export default class Parent extends Component {
    constructor(props){
        super(props)

        this.state = {
            stock : 15
        }
    }
    beliProduk = (jumlah) => {
        this.setState({
            stock: this.state.stock - jumlah
        })
    }
    render() {
        return (
            <div>
                <Child stock={this.state.stock}
                fungsi={this.beliProduk.bind(this)}/>
                <Child2 stock={this.state.stock}/>
            </div>
        )
    }
}
