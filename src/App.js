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

import LoginPage from './pages/LoginPage';
import CommunityPage from './pages/CommunityPage';
import SolPage from './pages/SolPage';
import ErrorPage from './pages/ErrorPage';

import LoginSuccess from './components/common/LoginSuccess';
import PrivateRoute from './components/common/PrivateRoute';

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
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <MainPage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/ISInfo"
                        element={
                            <PrivateRoute>
                                <ISInfo />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/ISRegister1"
                        element={
                            <PrivateRoute>
                                <ISRegister1
                                    formData={formData}
                                    updateFormData={updateFormData}
                                />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/ISRegister2"
                        element={
                            <PrivateRoute>
                                <ISRegister2
                                    formData={formData}
                                    updateFormData={updateFormData}
                                />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/ISRegister3"
                        element={
                            <PrivateRoute>
                                <ISRegister3
                                    formData={formData}
                                    updateFormData={updateFormData}
                                />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/ISRegister4"
                        element={
                            <PrivateRoute>
                                <ISRegister4 formData={formData} />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/ISRegister5"
                        element={
                            <PrivateRoute>
                                <ISRegister5 formData={formData} />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/myAccount"
                        element={
                            <PrivateRoute>
                                <MyAccountPage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/depositHistory"
                        element={
                            <PrivateRoute>
                                <DepositHistoryPage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/myCan"
                        element={
                            <PrivateRoute>
                                <MyCanPage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/depositHistory"
                        element={
                            <PrivateRoute>
                                <DepositHistoryPage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/myCan"
                        element={
                            <PrivateRoute>
                                <MyCanPage />
                            </PrivateRoute>
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
                    <Route
                        path="/MyAccount"
                        element={
                            <PrivateRoute>
                                <MyAccountPage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/attendance/post"
                        element={
                            <PrivateRoute>
                                <PostAttendance />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/sol" element={<SolPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
