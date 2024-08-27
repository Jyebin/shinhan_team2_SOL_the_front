import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ISInfo from './components/ISRegister/ISInfo';
import ISRegister1 from './components/ISRegister/ISRegister1';
import ISRegister2 from './components/ISRegister/ISRegister2';
import ISRegister3 from './components/ISRegister/ISRegister3';
import ISRegister4 from './components/ISRegister/ISRegister4';
import ISRegister5 from './components/ISRegister/ISRegister5';
import MainPage from './pages/MainPage';
import Header from './components/navigator/Header';
import MyAccountPage from './pages/MyAccountPage';
import DepositHistoryPage from './pages/DepositHistoryPage';
import MyCanPage from './pages/MyCanPage';
import ViewAllAttendance from './pages/attendance/ViewAllAttendance';
import PostAttendance from './pages/attendance/PostAttendance';
import Login from './pages/Login';
import CommunityPage from './pages/CommunityPage';
import DepositHistoryPage from './pages/DepositHistoryPage';
import MyCanPage from './pages/MyCanPage';

// 상태와 단계 관련 상수 정의
const initialFormState = {
    data: {},
    step: 0,
};

function App() {
    const [formData, setFormData] = useState({});

    const updateFormData = (newData) => {
        setFormData((prevData) => ({
            ...prevData,
            ...newData,
        }));
    };

    return (
        <Router>
            <Header />
            <div className="mainContainer">
                <Routes>
                    <Route path="/login-success" element={<LoginSuccess />} />
                    <Route path="/" element={<MainPage />} />
                    <Route path="/test" element={<DepositHistoryPage />} />
                    <Route path="/MyCanPage" element={<MyCanPage />} />
                    <Route
                        path="/depositHistory"
                        element={<DepositHistoryPage />}
                    />
                    <Route path="/myCan" element={<MyCanPage />} />
                    <Route
                        path="/depositHistory"
                        element={<DepositHistoryPage />}
                    />
                    <Route path="/myCan" element={<MyCanPage />} />
                    <Route
                        path="/ISRegister"
                        element={
                            <ISRegisterPage
                                step={step}
                                nextStep={nextStep}
                                prevStep={handleBack}
                                formData={formData}
                            />
                        }
                    />
                    <Route
                        path="/attendance/main"
                        element={
                            <PrivateRoute>
                                <ViewAllAttendance />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/MyAccount" element={<MyAccountPage />} />
                    <Route
                        path="/attendance/post"
                        element={
                            <PrivateRoute>
                                <PostAttendance />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/community" element={<CommunityPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
