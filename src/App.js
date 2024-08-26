import './assets/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ISRegisterPage from './pages/ISRegisterPage';
import MainPage from './pages/MainPage';
import React, { useState } from 'react';
import Header from './components/navigator/Header';
import MyAccountPage from './pages/MyAccountPage';
import DepositHistoryPage from './pages/DepositHistoryPage';
import MyCanPage from './pages/MyCanPage';

// 상태와 단계 관련 상수 정의
const initialFormState = {
    data: {},
    step: 0,
};

function App() {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({});

    const handleCancel = () => {
        setFormData({});
        setStep(0);
    };

    const handleBack = (navigate) => {
        if (step > 0 && step < 5) {
            setStep(step - 1);
        } else if (step === 0) {
            navigate('/');
        }
    };

    const nextStep = (newData) => {
        setFormData({ ...formData, ...newData });
        setStep(step + 1);
    };

    return (
        <Router>
            <div className="mainContainer">
                <Header
                    onBack={handleBack}
                    onCancel={handleCancel}
                    step={step}
                />
                <Routes>
                    <Route path="/" element={<MainPage />} />
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
                        element={<ViewAllAttendance />}
                    />
                    <Route path="/MyAccount" element={<MyAccountPage />} />
                    <Route
                        path="/attendance/post"
                        element={<PostAttendance />}
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/community" element={<CommunityPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
