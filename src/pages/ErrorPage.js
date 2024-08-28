import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/ErrorPage.css';

function ErrorPage() {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/'); // 홈 페이지로 이동
    };

    return (
        <div className="error-page">
            <h1>404</h1>
            <p>페이지를 찾을 수 없습니다.</p>
            <button onClick={handleGoHome} className="error-button">
                홈으로 이동
            </button>
        </div>
    );
}

export default ErrorPage;
