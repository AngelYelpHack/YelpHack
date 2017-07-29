const testReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        default:
            console.log("reducing");
            return state;
    }
}

export default testReducer;