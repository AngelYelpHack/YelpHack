import yelp from 'yelp-fusion';

export const RECEIVE_RECOMMENDATIONS = "RECEIVE_RECOMMENDATIONS";

const receiveRecommendations = data => ({
    type: RECEIVE_RECOMMENDATIONS,
    data
});

// Thunker

export const fetchRecommendations = location => dispatch => {
    // $.ajax({
    //     url: `api/yelp`,
    //     dataType: 'jsonp'
    // })
    // .then(data => {
    //     console.log(data);
    //     dispatch(data)
    // });

    fetch("yelp").then(res => res.json()).then(data => console.log(data));
};