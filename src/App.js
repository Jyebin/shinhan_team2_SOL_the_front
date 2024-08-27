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
import SolPage from './pages/SolPage';
import ErrorPage from './pages/ErrorPage';

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
                    <Route path="/" element={<MainPage />} />
                    <Route path="/ISInfo" element={<ISInfo />} />
                    <Route
                        path="/ISRegister1"
                        element={
                            <ISRegister1
                                formData={formData}
                                updateFormData={updateFormData}
                            />
                        }
                    />
                    <Route
                        path="/ISRegister2"
                        element={
                            <ISRegister2
                                formData={formData}
                                updateFormData={updateFormData}
                            />
                        }
                    />
                    <Route
                        path="/ISRegister3"
                        element={
                            <ISRegister3
                                formData={formData}
                                updateFormData={updateFormData}
                            />
                        }
                    />
                    <Route
                        path="/ISRegister4"
                        element={<ISRegister4 formData={formData} />}
                    />
                    <Route
                        path="/ISRegister5"
                        element={<ISRegister5 formData={formData} />}
                    />
                    <Route path="/myAccount" element={<MyAccountPage />} />
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
                        path="/attendance/main"
                        element={<ViewAllAttendance />}
                    />
                    <Route path="/MyAccount" element={<MyAccountPage />} />
                    <Route
                        path="/attendance/post"
                        element={<PostAttendance />}
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sol" element={<SolPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
