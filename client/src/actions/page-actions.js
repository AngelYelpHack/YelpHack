export const RECEIVE_RECOMMENDATIONS = "RECEIVE_RECOMMENDATIONS";

const receiveRecommendations = data => ({
    type: RECEIVE_RECOMMENDATIONS,
    data
});

// Thunker

const myHeaders = new Headers();
myHeaders.append("Content-Type", "jsonp");
myHeaders.append()

var myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};

export const fetchRecommendations = location => dispatch => (
    fetch(`https://api.yelp.com/v3/businesses/search?location=${location}`, myInit)
        .then(res => (res.json()))
        .then(json => (dispatch(json)))
);