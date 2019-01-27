import React from 'react';
import './content.css';

import {Col, Row, Container } from '../../components/grid';

class content extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         spots: [],
    //         name: '',
    //         address: ''
    //     };
    // }
    render () {
        return (
            <Container fluid>
                <Row>
                    <Col size='md-12 sm-12'>

                        Placeholder text
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default content;