import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../assets/Header.css';

function Header({ onBack, onCancel, step, title }) {
    const navigate = useNavigate();
    const location = useLocation();

    if (location.pathname === '/') {
        return null; // MainPage에서는 Header를 렌더링하지 않음
    }

    return (
        <header className="header">
            {step < 5 && ( // step이 5가 아닐 때만 뒤로가기 버튼을 표시
                <button
                    className="header-button"
                    onClick={() => onBack(navigate)}
                >
                    <img src="/icons/back-arrow.png" alt="뒤로가기" />
                </button>
            )}
            <h1 className="header-title">{title}</h1>
            {step > 0 && step < 5 && (
                <button className="header-button" onClick={onCancel}>
                    취소
                </button>
            )}
        </header>
    );
}

export default Header;
