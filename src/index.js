import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import PostAttendance from './pages/attendance/PostAttendance';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <PostAttendance />
    </React.StrictMode>,
);
