import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../../assets/mainPage/MainPage.css';
import '../../assets/mainPage/MainButton.css';
import MainButton from './MainButton';
import axios from 'axios';

const SavingsMain = ({ hasSavings, imgSrc }) => {
    const navigate = useNavigate();

    const navigateTo = (path) => () => navigate(path);

    const logout = async () => {
        try {
            await axios.get('http://localhost:9070/api/logout', {
                withCredentials: true,
            });
            deleteCookie('token');
            sessionStorage.removeItem('token');
            window.location.href = '/login';
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    function deleteCookie(name) {
        document.cookie =
            name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    return (
        <div className="mainContainer">
            <img src={imgSrc} alt="mainImage" className="mainBackground" />

            {/* user_has_can이 1이면 checkCan, attendanceBtn, checkAccount 버튼을 활성화 */}
            {hasSavings ? (
                <>
                    <MainButton
                        className="checkCan"
                        onClick={navigateTo('/myCan')}
                    />
                    <MainButton
                        className="attendanceBtn"
                        onClick={navigateTo('/attendance/main')}
                    />
                </>
            ) : (
                <MainButton
                    className="makeCan"
                    onClick={navigateTo('/ISInfo')}
                />
            )}

            {/* checkAccount 버튼은 항상 활성화 */}
            <MainButton
                className="checkAccount"
                onClick={navigateTo('/myAccount')}
            />

            {/* 로그아웃 버튼 */}
            <MainButton className="logout" onClick={logout} />
        </div>
    );
};

export default SavingsMain;
