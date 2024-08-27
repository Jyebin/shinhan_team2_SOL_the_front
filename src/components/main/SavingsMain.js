// 공통 컴포넌트
import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 추가

import '../../assets/mainPage/MainPage.css';
import '../../assets/mainPage/MainButton.css';
import MainButton from './MainButton';

const SavingsMain = ({ containerClass, buttonClass, imgSrc }) => {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleMakeCanClick = () => {
        navigate('/ISInfo'); // 버튼 클릭 시 /ISRegister 경로로 이동
    };

    const handleCheckCanClick = () => {
        navigate('/myAccount'); // 버튼 클릭 시 /myAccount 경로로 이동
    };

    const handleAttendanceClick = () => {
        navigate('/attendance/main'); // 버튼 클릭 시 /ViewAllAttendance 경로로 이동
    };

    // 버튼 클래스에 따른 핸들러 호출 함수
    const getClickHandler = (buttonClass) => {
        switch (buttonClass) {
            case 'makeCan':
                return handleMakeCanClick;
            case 'checkCan':
                return handleCheckCanClick;
            default:
                return () => {};
        }
    };

    return (
        <div className={`mainContainer ${containerClass}`}>
            <img src={imgSrc} alt="mainImage" className="mainBackground" />
            <MainButton
                className="attendanceBtn"
                onClick={handleAttendanceClick}
            />
            <MainButton
                className={buttonClass}
                onClick={getClickHandler(buttonClass)}
            />
            {buttonClass === 'makeCan' && (
                <MainButton
                    className="checkAccount"
                    onClick={handleCheckCanClick}
                />
            )}
        </div>
    );
};

export default SavingsMain;
