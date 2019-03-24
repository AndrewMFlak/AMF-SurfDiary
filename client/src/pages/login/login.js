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

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.userName && this.state.userPassword) {
            API.saveUser({
                username: this.state.userName,
                password: this.state.userPassword
            })
                .then(res => this.loadUsers())
                .catch(err => console.log(err));
        }
        console.log('stateCheck:',this.state)
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size='md-4'>
                        <div className ="loginDiv">
                            <h1>Welcome To The Surf Diary</h1>
                            <br/>
                            <form>
                                <Input value={this.state.userName} onChange={this.handleInputChange} name="userName" placeholder="Please Enter Your Username"/>
                                <Input value={this.state.password} onChange={this.handleInputChange} name="password" placeholder="Please Enter You Password" />
                                <FormBtn disabled={!(this.state.enter) && (this.state.enter)} onClick={this.stateFormSubmit}>Enter</FormBtn>
                                <br/>
                                <br/>
                                <FormBtn disabled={!(this.state.userName) && (this.state.userPassword)} onClick={this.handleFormSubmit}>Login To Surf Diary</FormBtn>
                                <FormBtn disabled={!(this.state.userName) && (this.state.userPassword)} onClick={this.handleFormSubmit}>Create New User</FormBtn>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default login;