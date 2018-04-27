import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/style.css';
import 'bootswatch/dist/cosmo/bootstrap.min.css'; //C:\Users\cihan\prof-guide\buggy-react-ui\node_modules\bootswatch\dist\cosmo\bootstrap.min.css
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