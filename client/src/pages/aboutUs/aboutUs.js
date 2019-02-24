import React from 'react';
import './aboutUs.css';
// import Jumbotron from '../../components/Jumbotron';
import { Col, Row, Container } from '../../components/grid';

class aboutUs extends React.Component {
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
                        <div className="textContainer">
                            <h1>
                                About Us
                        </h1>
                            <p1>
                                My name is Andrew Flak and first and foremost I am a surfer.  I began surfing a in my 20's as a young man living in Florida.  Off and on I have continued surfing into my late 30's now living in the Northeast of the United States.
                        </p1>
                            <br />
                            <br />
                            <p2>
                                Sincerely,
                                Andrew Flak
                        </p2>
                        </div>

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default aboutUs;