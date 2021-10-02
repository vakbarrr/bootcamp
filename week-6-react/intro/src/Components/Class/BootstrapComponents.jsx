import { Alert, Col, Container, Form, FormGroup, Input, Row, Label, Button } from 'reactstrap'
import React, { Component } from 'react'

export default class BootstrapComponents extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return (
           <Container>
            <Row>
                <Col className="col-12 mt-3">
                 <Alert color="primary">
                    This is a primary alert — check it out!
                    </Alert>
                </Col>

                <Col className="col-12 mt-2">
                 <Alert color="danger">
                    This is a primary alert — check it out!
                    </Alert>
                </Col>

                <Col>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter email" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Enter password" />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="exampleSelect">Pilih Jenis kelamin</Label>
                        <Input type="select" name="select" id="exampleSelect">
                        <option>Laki-laki</option>
                        <option>Perempuan</option>
                        </Input>
                    </FormGroup>
                
                   <FormGroup>
                       <Button color="primary" className="mt-3 col-12" block>Submit</Button>
                   </FormGroup>
                </Form>
                </Col>
            </Row>
           </Container>
        )
    }
}
