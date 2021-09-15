import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppProvider from './store';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
        <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

