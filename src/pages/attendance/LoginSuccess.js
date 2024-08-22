import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function LoginSuccess() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get('token');

        if (token) {
            localStorage.setItem('token', token);
            console.log('Login successful, token:', token);

            // 로그인 성공 후 처리 (예: 상태 업데이트)
            // ...

            // 메인 페이지 또는 대시보드로 리다이렉트
            navigate('/');
        } else {
            console.error('No token received');
            navigate('/login');
        }
    }, [navigate, location]);

    return <div>로그인 처리 중...</div>;
}

export default LoginSuccess;
