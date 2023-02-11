import React, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
// import { getValue } from '@testing-library/user-event/dist/utils';
import Component from './modal-window/Modal';



function App() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 1000);
  });
  const sent = (event) => {
    const value = event.target.value;
    if (value === "так") {
      setShowModal(false);      
    };  
  };
  return (
    <div className="App">
      {showModal ? <Component sent={sent} /> : null}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
