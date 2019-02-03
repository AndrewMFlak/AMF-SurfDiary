import React from 'react';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

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
    }

    handleUpdate(isUpdate) {
        this.setState({ isUpdate: isUpdate })
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        const updatedSpots = {...this.state.spots}
        updatedSpots[name] = value
    
        this.setState({
            spots: updatedSpots
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.spots.spotName &&
        this.state.spots.spotLocation) {
            API.patchBook(this.props.match.params.id,
            this.state.spots)
            .then(res => this.setState({isUpdate:false}))
            .catch(err => console.log(err));
        }
    };

    getReadOnly = () => (
        <Container fluid>
            <Row>
                <Col>
                    <Jumbotron>
                        <h1>
                            {this.state.spots.spotName} at {this.state.spots.spotLocation}
                        </h1>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col size="md-10 md-offset-1">
                    <article>
                        <h1>
                            Spot Notes
                        </h1>
                        <p>
                            {this.state.spots.spotNotes}
                        </p>
                    </article>
                </Col>
            </Row>
            <Row>
                <button onClick={() => this.handleUpdate(true)}>Update</button>
                <Col size="md-2">
                    <Link to="/">← Back to Authors</Link>
                </Col>
            </Row>
        </Container>
    );

    getUpdateform = () => (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>What Spots Do I want to Visit</h1>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col size="md-10 md-offset-1">
                    <form>
                        <Input
                            value={this.state.spots.spotName}
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
                        <button onClick={() => this.handleUpdate(false)}>Cancel</button>
                        <FormBtn
                            disabled={!(this.state.spots.spotName && this.state.spots.spotLocation)}
                            onClick={this.handleFormSubmit}
                        >
                            Submit Spot
                        </FormBtn>
                    </form>
                </Col>
            </Row>
        </Container>
    );

    render() {
        if (this.state.isUpdate) return this.getUpdateform();
        else return this.getReadOnly();
    }

}

export default contentDetail;