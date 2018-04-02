import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/main.css';
import { BrowserRouter } from 'react-router-dom';

const app = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter basename='/redBusen'>
    <App />
  </BrowserRouter>,
  app
);
