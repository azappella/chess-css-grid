import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import App from './src/app';
import './index.css';


try {
    ReactDOM.render(
        <App></App>,
        document.getElementById('root')
    );
} catch(e) {
    throw e;
}

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}

