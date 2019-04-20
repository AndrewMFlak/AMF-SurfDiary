import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Container } from '../../components/grid';
import './Welcome.css';
// import FormBtn from '../../components/Form/FormBtn';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes.js';

class Welcome extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size='lg-6'>
                        <p className="container-fluid">
                            <p className="introduction">
                                Welcome to the surf diary.  If this is your first time visiting please sign up.  If you are a returning guest please sign in.
                                <br></br>
                                <br></br>
                                <button className="buttonFormat">
                                    <Link className="nav-link hvr-fade" to={routes.SIGN_UP}>Sign Up</Link>
                                </button>
                                <button className="buttonFormat">
                                    <Link className="nav-link hvr-fade" to={routes.LOGIN}>Sign In</Link>
                                </button>
                            </p>
                        </p>
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