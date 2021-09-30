import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'

export default class GetApi extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            items : []
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data=> this.setState({items : data}))
    }

    render() {
        const { items } = this.state

        return (
            <Container className="mt-5">
                <Row>
                    <Col>
                    {items.map((item, index) => 
                        <li key={index}>
                            {item.name}
                        </li>
                    )}
                    </Col>
                </Row>
            </Container>
        )
    }
}
