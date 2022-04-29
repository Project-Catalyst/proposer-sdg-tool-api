const axios = require('axios').default;

var params = new URLSearchParams();
params.append("arr", 5);
params.append("arr", 2);
params.append("arr", 11);
var request = {
    params: params
};
axios.get('http://localhost:5000/api/v1/humanRights', request)
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    })