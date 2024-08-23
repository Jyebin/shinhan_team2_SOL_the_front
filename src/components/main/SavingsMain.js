// 공통 컴포넌트
import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 추가

import '../../assets/mainPage/MainPage.css';
import '../../assets/mainPage/MainButton.css';
import MainButton from './MainButton';

const SavingsMain = ({ containerClass, buttonClass, imgSrc }) => {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleMakeCanClick = () => {
        navigate('/ISRegister'); // 버튼 클릭 시 /ISRegister 경로로 이동
    };

    const handleAttendanceClick = () => {
        navigate('/attendance/main'); // 버튼 클릭 시 /ViewAllAttendance 경로로 이동
    };

    return (
        <div className={`mainContainer ${containerClass}`}>
            <img src={imgSrc} alt="mainImage" className="mainBackground" />
            <MainButton
                className="attendanceBtn"
                onClick={handleAttendanceClick}
            />
            <MainButton className={buttonClass} onClick={handleMakeCanClick} />
            {buttonClass === 'makeCan' && (
                <MainButton className="checkAccount" />
            )}
        </div>
    );
};

export default SavingsMain;
