import './assets/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ISRegisterPage from './pages/ISRegisterPage';
import MainPage from './pages/MainPage';
import React, { useState } from 'react';
import Header from './components/navigator/Header';

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

    const getTitle = () => {
        switch (step) {
            case 0:
                return '적금 정보';
            case 1:
                return '적금 가입 1단계';
            case 2:
                return '적금 가입 2단계';
            case 3:
                return '적금 가입 3단계';
            case 4:
                return '적금 가입 4단계';
            case 5:
                return '가입 완료';
            default:
                return '적금';
        }
    };

    return (
        <Router>
            <div className="mainContainer">
                <Header
                    onBack={handleBack}
                    onCancel={handleCancel}
                    step={step}
                    title={getTitle()}
                />
                <Routes>
                    <Route path="/" element={<MainPage />} />
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
                </Routes>
            </div>
        </Router>
    );
}

export default App;
