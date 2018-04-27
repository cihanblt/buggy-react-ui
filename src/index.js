import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.cosmo.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import 'font-awesome/css/font-awesome.min.css';
// import "font-awesome/css/font-awesome.min.css"
const title = 'Prof Guide';

ReactDOM.render(
  (<div>
    <App></App>
  </div>),document.getElementById('root')
);

module.hot.accept();