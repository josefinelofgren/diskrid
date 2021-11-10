// import libaries 
import React from 'react';
import ReactDOM from 'react-dom';

import { 
  BrowserRouter as Router
 } from 'react-router-dom';


// import components 
import App from './App';

// import stylesheets 
import './stylesheets/index.css';
import './stylesheets/desktop.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

