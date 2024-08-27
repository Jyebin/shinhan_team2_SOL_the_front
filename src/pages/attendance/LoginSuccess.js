import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

function LoginSuccess() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [data, setData] = useState(null);
    const token = searchParams.get('token');

    useEffect(() => {
        if (token) {
            // 토큰을 sessionStorage에 저장
            sessionStorage.setItem('token', token);
            console.log('Login successful, token stored in session storage');

            // API 호출로 추가 데이터 가져오기
            axios
                .get(`http://192.168.0.63:3000/`, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((res) => {
                    setData(res.data);
                    // 데이터를 성공적으로 가져왔을 때 메인 페이지로 리다이렉트
                    navigate('/');
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                    // console.log('이게 실행되는건가');
                    sessionStorage.removeItem('token');
                    navigate('/login');
                });
        } else {
            console.error('No token received');
            navigate('/login');
        }
    }, [navigate, token]);

    if (!data) {
        return <div>로그인 처리 중...</div>;
    }

    return <div>로그인 성공! 리다이렉트 중...</div>;
}

export default LoginSuccess;
