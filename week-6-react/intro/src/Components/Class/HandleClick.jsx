import { Component } from "react";
import { Button, Col, Container, Row } from 'reactstrap';
class Toggle extends Component{
   
    constructor(props){
    super(props)

    this.state = {
    
    }

    this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(state => ({
        toggleStatus : !state.toggleStatus
        }))
    }

    render(){
    return (
    <Container>
    <Row>
        <Col>
        <Button color="primary" onClick={this.handleClick}>
            {this.state.toggleStatus ? 'ON' : 'OFF'}
        </Button>{' '}
        </Col>
    </Row>
    </Container>
    )
    }   
}

export default Toggle;