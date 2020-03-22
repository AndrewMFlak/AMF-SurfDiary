import React from 'react';
import { Link } from "react-router-dom";
import { Col, Row } from "../../components/grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import "./contentDetail.css";
// import MyFancyComponent from "../../components/googleMaps";

class contentDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spots: {},
            isUpdate: false
        };
    }

    componentDidMount() {
        API.getSpot(this.props.match.params.id)
            .then(res => this.setState({ spots: res.data }))
            .catch(err => console.log(err));
        console.log(this.state);
    }

    handleUpdate(isUpdate) {
        this.setState({ isUpdate: isUpdate })
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        const updatedSpots = { ...this.state.spots }
        updatedSpots[name] = value

        this.setState({
            spots: updatedSpots
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.spots.spotName &&
            this.state.spots.spotLocation) {
            API.patchSpot(this.props.match.params.id,
                this.state.spots)
                .then(res => this.setState({ isUpdate: false }))
                .catch(err => console.log(err));
        }
    };

    getReadOnly = () => (

        <div className="container-fluid">
            <div className="containerBackground">
                <Row>
                    <Col size="lg-6 sm-8">
                        <Jumbotron>
                            <h1>
                                {this.state.spots.spotName} located at {this.state.spots.spotLocation}
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="lg-6 sm-8">
                        <article>
                            <h1>
                                Spot Notes
                            </h1>
                            <p className="spotNotes">
                                {this.state.spots.spotNotes}
                            </p>
                        </article>
                    </Col>
                    {/* <MyFancyComponent spotLocation={this.state.spots.spotLocation} /> */}
                </Row>
                <Row>
                    <FormBtn onClick={() => this.handleUpdate(true)}>Update</FormBtn>
                    <Col size="md-2">
                        <Link to="/spots">← Return to Your Surf Spots</Link>
                    </Col>
                </Row>
            </div>
        </div>
    );

    getUpdateform = () => (
        <div className="container-fluid">
            <div className="containerBackground">
                <Row>
                    <Col size="lg-6 sm-8">
                        <Jumbotron>
                            <h1>Let the Good Times Roll</h1>
                        </Jumbotron> 
                    </Col>
                </Row>
                <Row>
                    <Col size="lg-6 sm-8">
                        <form>
                            <Input
                                value={this.state.spots.spotName}
                                onChange={this.handleInputChange}
                                name="spotName"
                                placeholder="Surf Spot Name (required)"
                            />
                            <Input
                                value={this.state.spots.spotLocation}
                                onChange={this.handleInputChange}
                                name="spotLocation"
                                placeholder="Surf Spot Location (required)"
                            />
                            <TextArea
                                value={this.state.spots.spotNotes}
                                onChange={this.handleInputChange}
                                name="spotNotes"
                                placeholder="Surf Spot Notes (Optional)"
                            />
                            <FormBtn onClick={() => this.handleUpdate(false)}>Cancel</FormBtn>
                            <FormBtn
                                disabled={!(this.state.spots.spotName && this.state.spots.spotLocation)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit Spot
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
            </div>
        </div>
    );

    render() {
        if (this.state.isUpdate) return this.getUpdateform();
        else return this.getReadOnly();
    }

}

export default contentDetail;