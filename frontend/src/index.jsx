import React from 'react';
import ReactDOM from 'react-dom';

import store from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<h1>Beep!</h1>, document.getElementById("root"));
});

// Only for testing

window.store = store;