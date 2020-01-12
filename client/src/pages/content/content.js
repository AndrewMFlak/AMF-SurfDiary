import React from 'react';
import './content.css';
import API from "../../utils/API";
import { Col, Row, Container } from '../../components/grid';
import { Input, TextArea, FormBtn } from "../../components/Form";

class content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spots: [],
            spotName: '',
            spotLocation: '',
            spotNotes: ''
        };
    }
    // When the component mounts, load all surf spots and save them this this.state.spots
    componentDidMount() {
        this.loadSpots();
    }

    // Loads all surf spots and sets them thos this.state.spots
    loadSpots = () => {
        API.getSpots()
            .then(res=>
                this.setState({
                    spots: res.data, spotName: "", spotLocation: "", spotNotes: ""})
                )
                .catch(err => console.log(err));
    };

    // Deletes a spot from the database with a given id, then relaods spots from the db
    deleteSpot = id => {
        API.deleteSpot(id)
        .then(res=> this.loadSpots())
        .catch(err => console.log(err));
    }

    // Handles updating component state when the user types in the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    //When the form is submitted, use the API.saveSpot method to save the surf spot data and then reload all spots from the db
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.spotName && this.state.spotLocation) {
            API.saveSpot({
                spotName: this.state.spotName,
                spotLocation: this.state.spotLocation,
                spotNotes: this.state.spotNotes,  
            })
                .then(res => this.loadSpots())
                .then(console.log('loadSpots Success'))
                .catch(err => console.log(err));
        }
        console.log('User stateCheck:', this.state)
    };

    clearForm = () => {
        document.getElementById("formId").reset();
    };

    render () {
        return (
            <Container fluid>          
                <Row>
                    <Col size="md-6">
                        <div className ="formDiv"> 
                            <h1>Surf Spot Entry</h1>
                            <form>
                                <Input
                                value={this.state.spotName}
                                onChange={this.handleInputChange}
                                name="spotName"
                                placeholder="Surf Spot Name (required)"
                                />
                                <Input
                                value={this.state.spotLocation}
                                onChange={this.handleInputChange}
                                name="spotLocation"
                                placeholder="Surf Spot Location (required)"
                                />
                                <TextArea
                                value={this.state.spotNotes}
                                onChange={this.handleInputChange}
                                name="spotNotes"
                                placeholder="Surf Spot Notes (Optional)"
                                />
                                <FormBtn
                                disabled={!(this.state.spotName) && (this.state.spotLocation)}
                                onClick={this.handleFormSubmit}
                                >
                                Submit Spot Info
                                </FormBtn>
                                <FormBtn className="formButton" type="button" name="cancelCourse" value="ClearForm">
                                </FormBtn>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default content;