import { Routes, Route } from 'react-router-dom';
import './assets/App.css';
import Login from './pages/Login';
import ViewAllAttendance from './pages/attendance/ViewAllAttendance';
import PostAttendance from './pages/attendance/PostAttendance';

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/attendance/main" element={<ViewAllAttendance />} />
            <Route path="/attendance/post" element={<PostAttendance />} />
        </Routes>
    );
}

export default App;
