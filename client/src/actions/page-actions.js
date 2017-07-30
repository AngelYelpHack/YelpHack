export const RECEIVE_RECOMMENDATIONS = "RECEIVE_RECOMMENDATIONS";

const receiveRecommendations = location => {
    type: RECEIVE_RECOMMENDATIONS,
    location
};

// Thunker

const fetchRecommendations = location => fetch => (
    fetch('api/data')
        .then(res => (res.json()))
        .then(json => (json));
);