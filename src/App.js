import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ISRegisterPage from './pages/ISRegisterPage';
import MainPage from './pages/MainPage';
import Header from './components/navigator/Header';

// 상태와 단계 관련 상수 정의
const initialFormState = {
    data: {},
    step: 0,
};

function App() {
    // 상태 관리: formData와 step을 하나의 객체로 관리
    const [formState, setFormState] = useState(initialFormState);

    const nextStep = (newData) => {
        setFormState((prevState) => ({
            ...prevState,
            data: { ...prevState.data, ...newData },
            step: prevState.step + 1,
        }));
    };

    const prevStep = () => {
        setFormState((prevState) => ({
            ...prevState,
            step: prevState.step > 0 ? prevState.step - 1 : 0,
        }));
    };

    const handleCancel = () => {
        setFormState(initialFormState);
    };

    const handleBack = (navigate) => {
        if (formState.step > 0) {
            prevStep();
        } else {
            navigate(-1); // 이전 페이지로 이동
        }
    };

    return (
        <Router>
            <div className="mainContainer">
                <Header onBack={handleBack} onCancel={handleCancel} step={formState.step} />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route
                        path="/ISRegister"
                        element={
                            <ISRegisterPage
                                step={formState.step}
                                nextStep={nextStep}
                                prevStep={prevStep}
                                formData={formState.data}
                                setFormData={(data) => setFormState({ ...formState, data })}
                            />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
