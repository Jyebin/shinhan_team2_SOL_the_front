import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/ISRegisterPage/ISRegister5.css';
import regiImage from '../../assets/ISRegisterPage/img/regi0.png'; // 이미지 경로에 따라 수정

function ISRegister5({ formData }) { 
    const navigate = useNavigate();

    const handleMainPageRedirect = () => {
        navigate('/');
    };

    const handleConfirmation = () => {
        navigate('/isinfo');
    };

    const formatDate = (date) => {
        return `${date.getFullYear()}년 ${String(date.getMonth() + 1)}월 ${String(date.getDate())}일`;
    };

    return (
        <div className="register-container">
            <div className="register-completion">
                <br />
                <br />
                <br />
                <div className="check-icon">
                    <div className="circle">
                        <span className="check-mark">✓</span>
                    </div>
                </div>
                <h2>
                    <span className="highlight">쏠거지 깡통</span> 적금 가입완료
                </h2>
                <p className="date-info">
                    {formatDate(new Date())}부터 자동이체가 시작돼요.
                </p>
                <div
                    className="main-button"
                    onClick={handleMainPageRedirect} // 클릭 이벤트 구현
                    style={{ cursor: 'pointer' }} // 클릭할 수 있음을 표시
                >
                    <div className="main-button-content">
                        <span>
                            쏠거지 이용하고
                            <br /> 우대금리 받기
                        </span>
                        <img
                            src={regiImage}
                            alt="쏠거지 이동 아이콘"
                            className="main-button-img"
                        />
                    </div>
                </div>
            </div>
            <footer className="register-footer">
                <button className="next-button" onClick={handleConfirmation}>
                    확인
                </button>
            </footer>
        </div>
    );
}

export default ISRegister5;
