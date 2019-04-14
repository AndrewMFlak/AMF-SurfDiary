import React from 'react';
import './intro.css';
import {Col, Row, Container } from '../../components/grid';

class intro extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size='lg-6'>
                        <p id="welcome">
                            Welcome
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default intro;