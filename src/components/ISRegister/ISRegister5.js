import React from 'react';
import '../../assets/ISRegisterPage/ISRegister5.css'; // 스타일 파일을 별도로 관리

function ISRegister5({ formData }) {
    const handleMainPageRedirect = () => {
        // 쏠거지 메인 페이지로 이동 (예시: /main)
        window.location.href = '/main';
    };

    const handleConfirmation = () => {
        // ISInfoPage로 이동 (예시: /info)
        window.location.href = '/info';
    };

    return (
        <div className="register-completion">
            <div className="check-icon">
                <div className="circle">
                    <span className="check-mark">✓</span>
                </div>
            </div>
            <h2>
                <span className="highlight">신한</span> 적금 가입완료
            </h2>
            <p className="sub-title">쏠거지 깡통</p>
            <p className="date-info">
                • {formData.startDate}부터 자동이체가 시작돼요.
            </p>
            <div className="action-buttons">
                <button className="main-button" onClick={handleMainPageRedirect}>
                    쏠거지 이동
                </button>
                <button className="confirm-button" onClick={handleConfirmation}>
                    확인
                </button>
            </div>
        </div>
    );
}

export default ISRegister5;
