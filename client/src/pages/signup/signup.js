import React from 'react';
import './signup.css';
import API from '../../utils/API';
import { Col, Row, Container } from '../../components/grid';
import { Input, FormBtn } from '../../components/Form';

class signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loggedIn: '',
            userName: '',
            userEmail: '',
            userHomeBreak: '',
            userPassword: '',
            existingUser: true
        };
    }
    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = () => {
        API.getUsers()
            .then(res =>
                this.setState({
                    users: res.data,
                    userName: "",
                    userEmail: "",
                    userHomeBreak: "",
                    userPassword: "",
                    loggedIn: "",
                    existingUser: ""})
                )
                .catch(err => console.log(err));
    };

    deleteUser = id => {
        API.deleteUser(id)
        .then(res=>this.loadUsers())
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    //When the form is submitted, use the API.saveUser method to save the user to api and db
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.userName && this.state.userEmail && this.state.userPassword && this.state.userHomeBreak) {
            API.saveUser({
                userName: this.state.userName,
                userEmail: this.state.userEmail,
                userHomeBreak: this.state.userHomeBreak,
                userPassword: this.state.userPassword,
                existingUser: true,
                loggedIn: true
            })
                .then(res => this.loadUsers())
                .then(console.log('loadUsers Success'))
                .catch(err => console.log(err));
        }
        console.log('stateCheck:', this.state)
    };

    clearForm = () => {
        document.getElementById("formId").reset();
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size='md-4'>
                        <div className="signupDiv">
                            <h1>
                                Create Your Profile For The Surf Diary Here!
                            </h1>
                            <br />
                            <form>
                                <Input value={this.state.userName} onChange={this.handleInputChange} name="userName" placeholder="Please Enter Your Username" />
                                <Input value={this.state.userEmail} onChange={this.handleInputChange} name="userEmail" placeholder="Please Enter Your Email...We promise not so send you a bunch of marketing stuff." />
                                <Input value={this.state.userPassword} onChange={this.handleInputChange} name="userPassword" placeholder="Please Enter Your Password" />
                                <Input value={this.state.userHomeBreak} onChange={this.handleInputChange} name="userHomeBreak" placeholder="Please Enter Your Home Break" />
                                <FormBtn 
                                disabled={!(this.state.userName) && (this.state.userPassword)} onClick={this.handleFormSubmit}>
                                Submit User Info</FormBtn>
                                <FormBtn className="formButton" type="button" name="cancelCourse" value="ClearForm">Clear Form</FormBtn>

                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>

        )
    }
}
export default signup;