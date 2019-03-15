import React from 'react';
import './login.css';
import API from '../../utils/API';
import { Col, Row, Container } from '../../components/grid';
import { Input, FormBtn } from '../../components/Form';

class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            loggedIn: '',
            userName: '',
            userPassword: ''
        };
    }
    // When the component mounts, load all 
    // componentDidMount() {
    //     this.loadSpots();
    // }

    loadUsers = () => {
        API.getUsers().then(res =>
            this.setState({
                users: res.date, userName: "", userPassword: "", loggedIn: true
            })
        )
        .catch(err => console.log(err));
    }

    // Handles updating component state when the user types in the input fields
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size='md-6'>
                        <div className ="loginDiv">
                            <h1>Welcome To The Surf Diary</h1>
                            <br/>
                            <form>
                                <Input value={this.state.userName} onChange={this.handleInputChange} name="userName" placeholder="Please Enter Your Username"/>
                                <Input value={this.state.password} onChange={this.handleInputChange} name="password" placeholder="Please Enter You Password" />
                                <FormBtn disabled={!(this.state.userName) && (this.state.userPassword)} onClick={this.handleFormSubmit}></FormBtn>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default login;