// TODO: Add a comment giving a brief description of what React is
// front end JS library which works as compontents
import React from 'react';

// TODO: Add a comment that describes the difference between react and react-dom
// react dom is a virtual dom that is used to compare against the browser dom
import ReactDOM from 'react-dom';

import App from './App';

// TODO: Add a comment describing the significance of the ReactDOM.render method
// This renders all the components via the app.js (which references components) into the root div on the index.html
ReactDOM.render(<App />, document.getElementById('root'));
