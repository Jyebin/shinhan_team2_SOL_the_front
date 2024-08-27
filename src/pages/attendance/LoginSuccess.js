import React, { useState, useEffect } from 'react';
import {
    useNavigate,
    useLocation,
    useSearchParams,
    redirect,
} from 'react-router-dom';
import axios from 'axios';

function LoginSuccess() {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [data, setData] = useState(null);
    const token = searchParams.get('token');
    const from = location.state?.from || '/'; // 원래 경로 또는 기본 경로

    useEffect(() => {
        redirect('/');
        if (token) {
            sessionStorage.setItem('token', token); // sessionStorage에 저장
            console.log(
                'Token stored in session storage:',
                sessionStorage.getItem('token'),
            ); // 토큰 저장 확인

            axios
                .get('http://localhost:3000/', {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((res) => {
                    setData(res.data);
                    console.log(res.data);
                    if (!from) {
                        navigate('/');
                    }
                    navigate(from); // 원래 경로로 리디렉션
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                    sessionStorage.removeItem('token');
                    navigate('/login');
                });
        } else {
            console.error('No token received');
            navigate('/login');
        }
    }, [navigate, token, from]);

    if (!data) {
        return <div>로그인 처리 중...</div>;
    }

    return <div>로그인 성공! 리디렉트 중...</div>;
}

export default LoginSuccess;
