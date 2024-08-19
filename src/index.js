import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import ViewAllAttendance from './pages/attendance/ViewAllAttendance';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ViewAllAttendance />
    </React.StrictMode>,
);
