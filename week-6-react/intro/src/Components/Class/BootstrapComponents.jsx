import { Alert } from 'reactstrap'
import React, { Component } from 'react'

export default class BootstrapComponents extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
              <Alert color="primary">
              This is a primary alert — check it out!
            </Alert>
            </div>
        )
    }
}
