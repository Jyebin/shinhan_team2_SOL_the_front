// 공통 컴포넌트
import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 추가

import '../../assets/mainPage/MainPage.css';
import '../../assets/mainPage/ActiveSavingsMain.css';
import '../../assets/mainPage/NoSavingsMain.css';

const SavingsMain = ({ containerClass, buttonClass, imgSrc }) => {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleMakeCanClick = () => {
        navigate('/ISInfo'); // 버튼 클릭 시 /ISRegister 경로로 이동
    };

    const handleAttendanceClick = () => {
        navigate('/attendance/main'); // 버튼 클릭 시 /ViewAllAttendance 경로로 이동
    };

    return (
        <div className={`mainContainer ${containerClass}`}>
            <img src={imgSrc} alt="mainImage" className="mainBackground" />
            <button
                className="mainBtn attendanceBtn"
                onClick={handleAttendanceClick}
            ></button>
            <button
                className={`mainBtn makeCanBtn ${buttonClass}`}
                onClick={handleMakeCanClick}
            ></button>
        </div>
    );
};

export default SavingsMain;
