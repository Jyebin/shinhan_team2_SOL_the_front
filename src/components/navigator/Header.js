import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../assets/Header.css';

function Header({ onBack, onCancel, step }) {
    const navigate = useNavigate();
    const location = useLocation();

    // MainPage 또는 로그인 페이지에서는 헤더를 표시하지 않음
    if (location.pathname === '/' || location.pathname === '/login') {
        return null;
    }

    // 이전 버튼 클릭 시 처리
    const handleBackClick = () => {
        if (location.pathname.toLowerCase() === '/isinfo') {
            navigate('/'); // MainPage로 이동
        } else {
            onBack(navigate); // 이전 페이지로 이동
        }
    };

    // 페이지에 따라 헤더의 타이틀 설정
    const getTitle = () => {
        switch (location.pathname.toLowerCase()) {
            case '/isinfo':
                return '적금 정보';
            case '/isregister1':
                return '적금 가입 1/4';
            case '/isregister2':
                return '적금 가입 2/4';
            case '/isregister3':
                return '적금 가입 3/4';
            case '/isregister4':
                return '적금 가입 4/4';
            case '/isregister5':
                return '가입 완료';
            case '/attendance/main':
                return '출석부';
            case '/attendance/post':
                return '글쓰기';
            case '/diposithistory':
                return '거래 내역';
            case '/myaccount':
                return '내 계좌';
            case '/mycan':
                return '내 깡통';
            default:
                return '';
        }
    };

    return (
        <header className="header">
            <button className="header-button" onClick={handleBackClick}>
                &lt;
            </button>
            <h1 className="header-title">{getTitle()}</h1>
            {[
                '/isregister1',
                '/isregister2',
                '/isregister3',
                '/isregister4',
            ].includes(location.pathname.toLowerCase()) && (
                <button
                    className="header-button"
                    onClick={() => navigate('/isinfo')}
                >
                    취소
                </button>
            )}
        </header>
    );
}

export default Header;
