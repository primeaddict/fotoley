import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import AppState from './service/app/AppState';


ReactDOM.render(
  <AppState>
    <App />
  </AppState>,
  document.getElementById('root')
);
