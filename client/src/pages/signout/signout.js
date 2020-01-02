import React from 'react';
// import API from '../../utils/API';
import { Col, Row, Container } from '../../components/grid';
import './signout.css';

class signout extends React.Component {
    // constructor(props) {
        // this.state = {
            // loggedIn = false
        // };
    // }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size='md-6'>
                        <div className="container-fluid">
                            <div className="goodBye">
                                Thank you for visiting the surf diary and spreading the good vibes.  
                                <br/>
                                <br/>
                                Come back soon to see all the enhancements we are making.
                                <br/>
                                Sincerely,<br/>
                                Andrew Flak
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default signout;