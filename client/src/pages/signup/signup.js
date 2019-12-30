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
            userHomeBreakLat: '',
            userHomeBreakLng: '',
            userPassword: ''
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
                    userHomeBreakLat: "",
                    userHomeBreakLng: "",
                    userPassword: "",
                    loggedIn: true})
                )
                .catch(err => console.log(err));
    };

    // geoCodeBreak(...) {
    //     let geocoder = new window.google.maps.Geocoder();
    //     geocoder.geocode({ 'address': this.state.userHomeBreak }, function (results, status) {
    //         if (status === 'OK') {
    //             if (status !== 'ZERO_RESULTS') {
    //                 let coords = results[0]
    //                     .geometry.location.toJSON();
    //                 console.log(coords);
    //                 let lat = coords.lat;
    //                 let lng = coords.lng;
    //                 this.setState({
    //                     userHomeBreakLat: lat,
    //                     userHomeBreakLng: lng
    //                 })
    //             }
    //         }
    //     })
    // };
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

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.userName && this.state.userEmail && this.state.userPassword && this.state.userHomeBreak) {
            API.saveUser({
                loggedIn: this.state.loggedIn,
                userName: this.state.userName,
                userEmail: this.state.userEmail,
                userHomeBreak: this.state.userHomeBreak,
                userHomeBreakLat: this.state.userHomeBreakLat,
                userHomeBreakLng: this.state.userHomeBreakLng,
                userPassword: this.state.userPassword
            })
                .then(res => this.loadUsers())
                .catch(err => console.log(err));
        }
        console.log('stateCheck:', this.state)
    }

    // clearForm = () => {
    //     document.getElementById("formId").reset();
    // };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size='md-4'>
                        <div className="signupDiv">
                            <h1>
                                Create Your Profile To The Surf Diary Here!
                            </h1>
                            <br />
                            <form id="formId">
                                <Input value={this.state.userName} onChange={this.handleInputChange} name="userName" placeholder="Please Enter Your Username" />
                                <Input value={this.state.userEmail} onChange={this.handleInputChange} name="userEmail" placeholder="Please Enter Your Email...We promise not so send you a bunch of shit." />
                                <Input value={this.state.userHomeBreak} onChange={this.handleInputChange} name="userHomeBreak" placeholder="Please Enter Your Home Break" />
                                <Input value={this.state.userPassword} onChange={this.handleInputChange} name="userPassword" placeholder="Please Enter Your Password" />
                                <FormBtn className="formButton" disabled={!(this.state.userName) && (this.state.userPassword)} onClick={this.handleFormSubmit}>Enter</FormBtn>
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