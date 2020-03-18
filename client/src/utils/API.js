import axios from 'axios'

export default {
    //get all surf spots
    getSpots: function () {
        return axios.get('/api/spots');
    },
    //delete a single surf spot
    deleteSpot: function (id) {
        return axios.delete('/api/spots/' + id);
    },
    //post new surf spot
    saveSpot: function(spotData) {
        return axios.post('/api/spots', spotData);
    },
    // Get surf spots with a given id
    getSpot: function(id) {
        return axios.get('/api/spots/' + id);
    },
    patchSpot: function(id, spotData) {
        return axios.patch('/api/spots/' + id, spotData);
    },
    getUsers: function () {
        return axios.get('/api/users');
    },
    deleteUser: function (id) {
        return axios.delete('/api/users/' + id);
    },
    saveUser: function(userData) {
        return axios.post('/api/users', userData);
    },
    getUser: function(id) {
        return axios.get('/api/spots/' + id);
    },
    patchUser: function(id, userData) {
        return axios.patch('/api/users/' + id, userData);
    }
}

