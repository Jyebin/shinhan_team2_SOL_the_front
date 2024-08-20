import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './App'; // App.js를 가져옴

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
