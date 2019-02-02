import React from 'react';
import './something.css';
// import Jumbotron from '../../components/Jumbotron';
import {Col, Row, Container } from '../../components/grid';

class something extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spots: [],
            spotName: '',
            spotLocation: ''
        };
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size='md-12 sm-12'>
                        {/* <h1>Welcome to the something page</h1>     */}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default something;