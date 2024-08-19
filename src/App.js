import './assets/App.css';
import ActiveSavingsMain from './pages/main/ActiveSavingsMain';
import NoSavingsMain from './pages/main/NoSavingsMain';
import MainPage from './pages/main/MainPage';
import { Routes, Route } from 'react-router-dom'; // BrowserRouter를 추가합니다.
import React from 'react';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/active" element={<ActiveSavingsMain />} />
                <Route path="/no" element={<NoSavingsMain />} />
            </Routes>
        </div>
    );
}

export default App;
