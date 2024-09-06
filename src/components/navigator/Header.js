import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../assets/Header.css';

// 경로와 타이틀을 매핑한 상수
const pathTitles = {
    '/isinfo': '적금 정보',
    '/isregister1': '적금 가입 1/4',
    '/isregister2': '적금 가입 2/4',
    '/isregister3': '적금 가입 3/4',
    '/isregister4': '적금 가입 4/4',
    '/isregister5': '가입 완료',
    '/attendance/main': '출석부',
    '/attendance/post': '글쓰기',
    '/deposithistory': '거래 내역',
    '/myaccount': '내 계좌',
    '/mycan': '내 깡통',
};

// 취소 버튼을 표시할 경로들
const cancelablePaths = [
    '/isregister1',
    '/isregister2',
    '/isregister3',
    '/isregister4',
];

// 특정 경로에서만 헤더를 표시하는 경로들
const validPaths = Object.keys(pathTitles);

function Header({ onBack }) {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname.toLowerCase();

    // 특정 경로에서만 헤더를 표시
    const validPaths = [
        '/isinfo',
        '/isregister1',
        '/isregister2',
        '/isregister3',
        '/isregister4',
        '/isregister5',
        '/attendance/main',
        '/attendance/post',
        '/deposithistory',
        '/myaccount',
        '/mycan',
        '/friend',
        '/userinfo',
        '/mypage',
    ];

    // 경로가 유효하지 않으면 헤더를 표시하지 않음
    if (!validPaths.includes(location.pathname.toLowerCase())) {
        return null;
    }

    // 이전 버튼 클릭 시 처리
    const handleBackClick = () => {
        if (
            ['/isinfo', '/myaccount', '/attendance/main'].includes(currentPath)
        ) {
            navigate('/'); // MainPage로 이동
        } else if (onBack) {
            onBack(navigate);
        } else {
            if (onBack) {
                onBack(navigate);
            } else {
                navigate(-1); // 기본 동작으로 뒤로 가기
            }
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
            case '/deposithistory':
                return '거래 내역';
            case '/myaccount':
                return '내 계좌';
            case '/mycan':
                return '내 깡통';
            case '/friend':
                return '친구 목록';
            case '/userinfo':
                return '친구';
            case '/mypage':
                return '마이페이지';
            default:
                return '';
        }
    };

    return (
        <header className="header">
            <button className="header-button" onClick={handleBackClick}>
                &lt;
            </button>
            <h1 className="header-title">{pathTitles[currentPath]}</h1>
            {cancelablePaths.includes(currentPath) && (
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
