import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 추가

import '../../assets/mainPage/MainPage.css';
import '../../assets/mainPage/MainButton.css';
import MainButton from './MainButton';
import axios from 'axios';

const SavingsMain = ({ containerClass, buttonClass, imgSrc }) => {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const navigateTo = (path) => () => navigate(path);

    const logout = async () => {
        try {
            await axios.get('http://localhost:9070/api/logout', {
                withCredentials: true, // 쿠키 포함
            });
            deleteCookie('token');
            sessionStorage.removeItem('token');
            window.location.href = '/login'; // 원래 방식대로 로그아웃 후 리디렉션
        } catch (error) {
            console.error('Logout failed:', error);
            // 필요에 따라 오류 처리 추가
        }
    };

    function deleteCookie(name) {
        document.cookie =
            name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    // 버튼 클래스에 따른 핸들러 매핑 객체
    const clickHandlers = {
        makeCan: navigateTo('/ISInfo'),
        checkCan: navigateTo('/myAccount'),
        attendanceBtn: navigateTo('/attendance/main'),
        logout,
    };

    return (
        <div className={`mainContainer ${containerClass}`}>
            <img src={imgSrc} alt="mainImage" className="mainBackground" />
            {Object.keys(clickHandlers).map((key) => (
                <MainButton
                    key={key}
                    className={key}
                    onClick={clickHandlers[key]}
                />
            ))}
            {buttonClass === 'makeCan' && (
                <MainButton
                    className="checkAccount"
                    onClick={navigateTo('/myAccount')}
                />
            )}
        </div>
    );
};

export default SavingsMain;
