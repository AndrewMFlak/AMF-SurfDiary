import axios from 'axios'

export default {
    //get all surf spots
    getSpots: function() {
        return axios.get('/api/spots');
    },
    //delete a single surf spot
    deleteSpots: function() {
        // return axios.delete('/api/spots/' + id);
    },
    //post new surf spot
    saveSpot: function(spotData) {
        return axios.post('/api/spots', spotData);
    },
    // Get surf spots with a given id
    getSpot: function() {
        // return axios.get('/api/spots/' + id);
    },
    patchSpot: function(id, spotData) {
        // return axios.patch('/api/spots/' + id, spotData)
    },
}

