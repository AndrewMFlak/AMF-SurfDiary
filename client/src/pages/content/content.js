import React from 'react';
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import './content.css';
import API from "../../utils/API";
import { Col, Row, Container } from '../../components/grid';
import { List, ListItem } from '../../components/List';
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

    //When the form is submitted, use the API.saveSpots method to save the surf spot data and then reload all spots from the db

    render () {
        return (
            <Container fluid>
                
                <Row>
                    <Col size='md-6'>
                    <Jumbotron>
                        <h1>Welcome to the Content Page...Finally!</h1>
                    </Jumbotron>
                        <form>
                            <Input
                            value={this.state.spotName}
                            onChange={this.handleInputChange}
                            name="spotName"
                            placeholder="Surf Spot Name (required)"
                            />
                            <Input
                            value={this.state.spotLocation}
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
                        </form>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Surf Spots on my list</h1>
                        </Jumbotron>
                        {this.state.spots.length ? (
                            <List>
                                {this.state.spots.map(spot => {
                                    return (
                                        <ListItem key={spot._id}>
                                            <a href={"/spots/"+spot._id}>
                                                <strong>
                                                 {spot.spotName} , {spot.spotLocation}
                                                </strong>
                                            </a>
                                            <DeleteBtn onClick={() => this.deleteSpot(spot._id)} />
                                        </ListItem>
                                    );
                                })}
                            </List>
                        ) : (
                            <h2>No Results to Display</h2>
                        )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default content;