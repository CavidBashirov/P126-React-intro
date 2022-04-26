import React, { Component } from 'react'
import { Button } from 'reactstrap';

class TestC extends Component {
    render() {
        return (
            <div>
                <Button color="primary">
                    Click Me
                </Button>
                <p>{this.props.studentName}</p>
            </div>
        )
    }
}

export default TestC;
