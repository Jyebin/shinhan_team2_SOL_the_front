import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../assets/Header.css';

function Header({ onBack, onCancel, step }) {
    const navigate = useNavigate();
    const location = useLocation();

    if (location.pathname === '/') {
        return null; // MainPage에서는 Header를 렌더링하지 않음
    }
    if (location.pathname === '/login') {
        return null;
    }

    const getTitle = () => {
        switch (location.pathname) {
            case '/':
                return '적금';
            case '/ISRegister':
                switch (step) {
                    case 0:
                        return '적금 정보';
                    case 1:
                        return '적금 가입 1/4';
                    case 2:
                        return '적금 가입 2/4';
                    case 3:
                        return '적금 가입 3/4';
                    case 4:
                        return '적금 가입 4/4';
                    case 5:
                        return '가입 완료';
                    default:
                        return '적금';
                }
            case '/attendance/main':
                return '출석부';
            case '/attendance/post':
                return '글쓰기';
            case '/test':
                return '거래 내역';
            case '/MyAccount':
                return '내 계좌';
            default:
                return '';
        }
    };

    return (
        <header className="header">
            {step < 5 && ( // step이 5가 아닐 때만 뒤로가기 버튼을 표시
                <button
                    className="header-button"
                    onClick={() => onBack(navigate)}
                >
                    &lt;
                </button>
            )}
            <h1 className="header-title">{getTitle()}</h1>
            {step > 0 && step < 5 && (
                <button className="header-button" onClick={onCancel}>
                    취소
                </button>
            )}
        </header>
    );
}

export default Header;
