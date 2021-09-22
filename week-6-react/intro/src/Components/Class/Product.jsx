import React, { Component } from 'react'
import './CSS/product.css'

export default class Product extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            stock : this.props.stock,
            sub : "Beli",
            status : "Tersedia",
            disabled : false
        }
    }

    buttonBeli = () => {
        this.setState({
            stock : this.state.stock - 1,
        })

        if (this.state.stock <= 1){
           this.setState({
            status : "Stok habis",
            disabled : true
           })
        }
    }

    render() {
        return (
            <div className="box-product">
                <h2><b>{this.props.nama}</b></h2>
                <img src="https://placeimg.com/640/480/tech" alt="header" />
                <p>{this.props.harga}</p>
                <p>{this.state.stock}</p>
                <p><button class="btn-click" onClick={this.buttonBeli} disabled={this.state.disabled}>Beli</button></p>
                <p>{this.state.status}</p>
            </div>
        )
    }
}
