import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  example: (state = 'default example') => state,
  other: (state = 'other') => state
});
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));