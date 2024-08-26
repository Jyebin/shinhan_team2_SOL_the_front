import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    // JWT 토큰이 존재하는지 확인
    const location = useLocation();
    const isAuthenticated = !!sessionStorage.getItem('token'); // 인증 확인 방법
    console.log('token:' + sessionStorage.getItem('token'));

    if (!isAuthenticated) {
        // 사용자가 인증되지 않았으면 로그인 페이지로 리디렉션
        return <Navigate to="/login" state={{ from: location.pathname }} />;
    }

    return children;
};

export default PrivateRoute;
