import React from 'react';
import DeleteBtn from "../../components/DeleteBtn";
import { Link } from "react-router-dom";
import './spots.css';
import API from "../../utils/API";
import { Col, Row, Container } from '../../components/grid';
import { List, ListItem } from '../../components/List';

class spots extends React.Component {
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

    //manage state accross file changes
    fileChangedHandler = (event) => {
        this.setState({ selectedFile: event.target.files[0] }
        )
    }

    // Loads all surf spots and sets them thos this.state.spots
    loadSpots = () => {
        API.getSpots()
            .then(res =>
                this.setState({ spots: res.data, spotName: "", spotLocation: "", spotNotes: "" })
            )
            .catch(err => console.log(err));
    };

    // Deletes a spot from the database with a given id, then relaods spots from the db
    deleteSpot = id => {
        API.deleteSpot(id)
            .then(res => this.loadSpots())
            .catch(err => console.log(err));
    };

    // Handles updating component state when the user types in the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    //When the form is submitted, use the API.saveSpot method to save the surf spot data and then reload all spots from the db
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.spotName && this.state.spotLocation) {
    //         API.saveSpot({
    //             spotName: this.state.spotName,
    //             spotLocation: this.state.spotLocation,
    //             spotNotes: this.state.spotNotes,  
    //         })
    //             .then(res => this.loadSpots())
    //             .catch(err => console.log(err));
    //     }
    // };

    render() {
        return (

            <Container fluid>
                <div className="spotContainer">
                    <Row>
                        <Col size="sm-12, md-6">
                            <h1 className="spotHeader">Surf Spots on my list</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="sm-12, md-6">
                            <div className="listContainer">

                                {this.state.spots.length ? (
                                    <List>
                                        {this.state.spots.map(spot => {
                                            return (
                                                <ListItem key={spot._id}>
                                                    <Row>
                                                        <Col size="sm-12, md-6">
                                                            <Link to={`/content/${spot._id}`}>
                                                                <strong>
                                                                    {spot.spotName} , {spot.spotLocation}
                                                                </strong>
                                                            </Link>
                                                            <DeleteBtn onClick={() => this.deleteSpot(spot._id)} />
                                                        </Col>
                                                    </Row>
                                                </ListItem>
                                            );
                                        })}
                                    </List>
                                ) : (
                                        <h2>No Results to Display</h2>
                                    )}
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}

export default spots;