import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../assets/Header.css';

function Header({ onBack, onCancel, step }) {
    const navigate = useNavigate();
    const location = useLocation();

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
    ];

    // 경로가 유효하지 않으면 헤더를 표시하지 않음
    if (!validPaths.includes(location.pathname.toLowerCase())) {
        return null;
    }

    // 경로별 이전 버튼의 동작 정의
    const backNavigationPaths = {
        '/attendance/post': '/attendance/main',
        '/attendance/main': '/',
        '/myaccount': '/',
        '/mycan': '/myaccount',
        '/deposithistory': '/myaccount',
        '/isinfo': '/',
    };

    // 이전 버튼 클릭 시 처리
    const handleBackClick = () => {
        const path = location.pathname.toLowerCase();
        const targetPath = backNavigationPaths[path];

        if (targetPath) {
            navigate(targetPath); // 정의된 경로로 이동
        } else if (onBack) {
            onBack(navigate); // onBack 함수가 있으면 실행
        } else {
            navigate(-1); // 기본 동작으로 뒤로 가기
        }
    };

    // 페이지에 따라 헤더의 타이틀 설정
    const titles = {
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

    const title = titles[location.pathname.toLowerCase()] || '';

    return (
        <header className="header">
            <button className="header-button" onClick={handleBackClick}>
                &lt;
            </button>
            <h1 className="header-title">{title}</h1>
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
