import './assets/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ISRegisterPage from './pages/ISRegisterPage';
import MainPage from './pages/MainPage';
import React, { useState } from 'react';
import Header from './components/navigator/Header';

function App() {
    const [step, setStep] = useState(0); // Step 상태를 App.js에서 관리
    const [formData, setFormData] = useState({}); // 입력된 데이터를 저장

    const handleCancel = () => {
        setFormData({}); // 폼 데이터 초기화
        setStep(0); // 첫 번째 스텝으로 돌아감
    };

    const handleBack = (navigate) => {
        if (step > 0 && step < 5) {
            // 5번 페이지에서는 이전 버튼 비활성화
            setStep(step - 1); // 이전 스텝으로 이동
        } else if (step === 0) {
            navigate('/'); // ISInfo에서는 이전 버튼을 누르면 MainPage로 이동
        }
    };

    const nextStep = (newData) => {
        setFormData({ ...formData, ...newData }); // 폼 데이터를 업데이트
        setStep(step + 1); // 다음 스텝으로 이동
    };

    // 페이지별 제목 설정
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
