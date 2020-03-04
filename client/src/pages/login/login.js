import React from 'react';
import './login.css';
import API from '../../utils/API';
import { Col, Row, Container } from '../../components/grid';
import { Input, FormBtn } from '../../components/Form';
// import Link from '../../constants/routes';

class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loggedIn: "",
            userName: "",
            userEmail: "",
            userPassword: "",
            existingUser: ""
        };
    }
    // When the component mounts, load all 
    // componentDidMount() {
    //     this.loadSpots();
    // }

    loadUsers = () => {
        API.getUsers()
            .then(res =>
                this.setState({
                    users: res.data, 
                    userName: "", 
                    userEmail: "", 
                    userPassword: "", 
                    loggedIn: true,
                    existingUser: true})
            )
            .catch(err => console.log(err));
    };


    // Deletes a spot from the database with a given id, then reloads spotsfrom the db
    deleteUser = id => {
        API.deleteUser(id)
        .then(res=> this.loadUsers())
        .catch(err=> console.log(err));
    }
    // Handles updating component state when the user types in the input fields
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    //When the form is submitted, use the API.saveUser method to save the surf spot data and then reload all spots from the db
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.userName &&
            this.state.userPassword) {
            API.saveUser({
                loggedIn: this.state.loggedIn,
                userName: this.state.userName,
                userEmail: this.state.userEmail,
                userPassword: this.state.userPassword
            })
                .then(res => this.loadUsers())
                .catch(err => console.log(err));
        }
        console.log('stateCheck:',this.state)
    };

    clearForm = () => {
        document.getElementById("formId").reset();
    };
    

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size='md-4'>
                        <div className ="loginDiv">
                            <h1>Welcome To The Surf Diary.  Please Sign In Here!</h1>
                            <br/>
                            <form id="formId">
                                <Input value={this.state.userName} onChange={this.handleInputChange} name="userName" placeholder="Please Enter Your Username"/>
                                <Input value={this.state.userPassword} onChange={this.handleInputChange} name="userPassword" placeholder="Please Enter You Password" />
                                <FormBtn disabled={!(this.state.userName) && (this.state.userPassword)} onClick={this.handleFormSubmit}>Enter</FormBtn>
                                <FormBtn type="button" name="cancelCourse" value="ClearForm">ClearForm</FormBtn>
                                <br/>
                                <br/>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default login;