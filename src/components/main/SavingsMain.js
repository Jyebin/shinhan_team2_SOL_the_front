// 공통 컴포넌트
import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 추가

import '../../assets/mainPage/MainPage.css';
import '../../assets/mainPage/MainButton.css';
import MainButton from './MainButton';
import axios from 'axios';

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

    const logout = () => {
        axios
            .get('http://localhost:9070/api/logout', {
                withCredentials: true, // 쿠키 포함
            })
            .then(() => {
                // 프론트엔드에서 쿠키 삭제
                deleteCookie('token');
                sessionStorage.removeItem('token');

                // 로그아웃 후 로그인 페이지로 리디렉션
                window.location.href = '/login';
            })
            .catch((error) => {
                console.error('Logout failed:', error);
                // 필요에 따라 오류 처리 추가
            });
    };

    function deleteCookie(name) {
        document.cookie =
            name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

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
            <MainButton className="logout" onClick={logout} />
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
