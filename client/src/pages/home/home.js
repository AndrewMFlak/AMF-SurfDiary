import React from 'react';
import './home.css';
import API from '../../utils/API';
import { Col, Row, Container } from '../../components/grid';
import Welcome from '../../components/Welcome';

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
            .then(res=>
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
                        <Welcome/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default home;