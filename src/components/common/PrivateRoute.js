import React from 'react';
import axios from 'axios';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    // JWT 토큰이 존재하는지 확인
    const location = useLocation();
    const isAuthenticated = !!sessionStorage.getItem('token');

    const validateToken = () => {
        axios
            .get('http://localhost:9070/api/validate', {
                withCredentials: true,
            })
            .then((response) => {
                if (response.data && response.data.token) {
                    sessionStorage.setItem('token', response.data.token);
                }
            })
            .catch((error) => {
                console.error('Error in viewAllattendance Page with:', error);
                console.log(
                    '로그인 인증이 만료되었습니다. 다시 로그인 해주십시오.',
                );
                sessionStorage.removeItem('token');
            });
    };

    if (!isAuthenticated) {
        // 사용자가 인증되지 않았으면 로그인 페이지로 리디렉션
        return <Navigate to="/login" state={{ from: location.pathname }} />;
    }

    validateToken();
    return children;
};

export default PrivateRoute;
