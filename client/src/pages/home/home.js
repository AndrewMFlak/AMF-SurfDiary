import React from 'react';
import API from '../../utils/API';
import { Col, Row, Container } from '../../components/grid';
import './home.css';
// import Welcome from '../../components/Welcome';

class home extends React.Component {
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
    //Loads all surf spots and sets them this.state.spots
    loadSpots = () => {
        API.getSpots()
            .then(res =>
                this.setState({
                    spots: res.data, spotName: "", spotLocation: "", spotNotes: ""
                }))
            .catch(err => console.log(err));
    };


    render() {
        return (

            <Container fluid>
                <Row>
                    <Col size='md-6'>
                        <div className="container-fluid">
                            <div className="introduction">
                                 The purpose of the surf diary is to give surfers and enthusiasts alike a resource to document spots they believe are significant and worth noting in their surf lives.  We all know the mark a surf spot can leave on a surfer after a great session.  My hope is that this tool provides you a way to capture a piece of that and take with you moving forward.
                                <br />
                                <br />
                                We trust that you will use this tool as intended and stay true to the great surfing heritage that we all share in.  If you would like to learn more about the history of surfing please visit the <a href="https://eos.surf/">Encyclopedia Of Surfing.</a>.
                                <br />
                                <br />
                                A very special thank you to Matt Warshaw for all his efforts over the years in chronicaling the rich history of surfing.
                                <br />
                                Sincerely,<br />
                                Andrew Flak
                            </div>
                        </div>                    </Col>
                </Row>
            </Container>
        )
    }
}

export default home;