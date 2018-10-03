import React from 'react';
import './home.css';
import API from '../../utils/API';
import { Col, Row, Container } from '../../components/Grid';

class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spots: [],
            name: '',
            address: ''
        };
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size='md-12 sm-12'>
                        Placholder text
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default home;