import React from 'react';
import './home.css';
// import API from '../../utils/API';
// import Jumbotron from '../../components/Jumbotron';
import { Col, Row, Container } from '../../components/grid';

class home extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         spots: [],
    //         name: '',
    //         address: ''
    //     };
    // }
    render() {
        return (
            
            <Container fluid>
                <Row>
                    <Col size='md-12 sm-12'>
                        {/* <h1>Welcome to the home page</h1> */}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default home;