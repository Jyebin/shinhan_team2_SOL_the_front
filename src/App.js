import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ISRegisterPage from './pages/ISRegisterPage';
import MainPage from './pages/MainPage';
import Header from './components/navigator/Header';

function App() {
    // 상태 관리
    const [formData, setFormData] = useState({});
    const [step, setStep] = useState(0);

    const nextStep = (newData) => {
        setFormData({ ...formData, ...newData });
        setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    const handleCancel = () => {
        setFormData({});
        setStep(0);
    };

    return (
        <Router>
            <div className="mainContainer">
                <Header onCancel={handleCancel} step={step} />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route
                        path="/ISRegister"
                        element={
                            <ISRegisterPage
                                step={step}
                                nextStep={nextStep}
                                prevStep={prevStep}
                                formData={formData}
                                setFormData={setFormData} // 여기서 전달
                            />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
