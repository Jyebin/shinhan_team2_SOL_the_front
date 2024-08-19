import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import MyAccountPage from './pages/MyAccountPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <MyAccountPage />
    </React.StrictMode>,
);
