import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import {createStore} from 'redux';
import { Provider} from 'react-redux';

const store = createStore(
    allReducer, 
    {
    products: [{name: 'iPhone'}],
    user: 'Bao'
    },
    window.devToolsExtension && window.devToolsExtension() // checking to see if windows has devTools ext. installed and invoke
); 


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
    );
    