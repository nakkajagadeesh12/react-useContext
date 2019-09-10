import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { Store, StoreProvider } from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataComponent } from './DataComponent';


const App = () => {
  return (
    <div>
      <h2>React Hooks</h2>
      <DataComponent />
    </div>
  )
}
ReactDOM.render(
  <StoreProvider value="provider and consumer">
    <App />
  </StoreProvider>
  , document.getElementById('root'));
