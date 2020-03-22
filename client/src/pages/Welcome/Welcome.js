import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Container } from '../../components/grid';
import './Welcome.css';
// import FormBtn from '../../components/Form/FormBtn';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes.js';

class Welcome extends React.Component {
    // constructor(props) {
    //     this.state = {
    //         loggedIn = false
    //     }
    // }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size='lg-6'>
                        <div className="container-fluid">
                            <div className="introduction">
                                <div className="introductionHeader">Aloha!!!</div>
                                <br/>
                                Welcome to the surf diary!!!
                                <br/>  
                                If this is your first time visiting please sign up.  
                                <br/>
                                If you are a returning guest please sign in.
                                <br/>
                                <br/>
                                <button className="buttonFormat">
                                    <Link className="nav-link hvr-fade" to={routes.SIGN_UP}>Sign Up</Link>
                                </button>
                                <button className="buttonFormat">
                                    <Link className="nav-link hvr-fade" to={routes.LOGIN}>Login</Link>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        );
    }

}

Welcome.props = {
    children: PropTypes.node
}

export default Welcome;