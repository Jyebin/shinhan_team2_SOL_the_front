import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ToMyAccount from '../../pages/mainLoading/ToMyAccount';
import '../../assets/mainPage/MainPage.css';
import '../../assets/mainPage/MainButton.css';
import MainButton from './MainButton';
import noMoneyManUrl from '../../assets/common/img/noMoneyMan.png';
import axios from 'axios';

const SavingsMain = ({ hasSavings, imgSrc }) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가

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

    const moving = () => {
        setIsLoading(true); // 로딩 상태 활성화
        setTimeout(() => {
            navigateTo('/myAccount')();
        }, 2500);
    };

    return (
        <div className="mainContainer">
            <img src={imgSrc} alt="mainImage" className="mainBackground" />

            {isLoading ? (
                <ToMyAccount />
            ) : (
                <>
                    {/* user_has_can이 1이면 checkCan, attendanceBtn / 0이면 makeCan 버튼을 활성화 */}
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
                            <img src={noMoneyManUrl} className="noMoneyMan" />
                            <MainButton
                                className="friendsBtn"
                                onClick={navigateTo('/mypage')}
                            />
                        </>
                    ) : (
                        <MainButton
                            className="makeCan"
                            onClick={navigateTo('/ISInfo')}
                        />
                    )}

                    {/* checkAccount 버튼은 항상 활성화 */}
                    <MainButton className="checkAccount" onClick={moving} />

                    {/* 로그아웃 버튼 */}
                    <MainButton className="logout" onClick={logout} />
                </>
            )}
        </div>
    );
};

export default SavingsMain;
