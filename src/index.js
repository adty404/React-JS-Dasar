import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Variable from './Variable';
// import StateProps from './StateProps';
// import Map from './Map';
import Lifecycle from './Lifecycle';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Variable /> */}
    {/* <StateProps /> */}
    {/* <Map /> */}
    <Lifecycle />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
