import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducers/reducer';

ReactDOM.render(
  <StateProvider 
  initialState={initialState}
  reducer={reducer}
  >
    <App />
  </StateProvider>
  ,
  document.getElementById('root')
);

