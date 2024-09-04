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

    // 유효하지 않은 경로에서는 헤더를 표시하지 않음
    if (!validPaths.includes(currentPath)) {
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
            navigate(-1); // 기본 동작으로 뒤로 가기
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
