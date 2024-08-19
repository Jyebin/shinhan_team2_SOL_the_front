import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import ViewAllAttendance from './pages/attendance/ViewAllAttendance';
import TestMainPage from './pages/attendance/TestMainPage';
import Login from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        {/* <ViewAllAttendance /> */}
        <Login />
    </React.StrictMode>,
);
