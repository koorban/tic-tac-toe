import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextTicTacToe from './ContextTicTacToe';

ReactDOM.render(
  <ContextTicTacToe>
    <App />
  </ContextTicTacToe>,
  document.getElementById('root')
);

