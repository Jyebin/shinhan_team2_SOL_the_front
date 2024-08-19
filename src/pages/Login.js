import React from 'react';
import '../assets/login/Login.css';
import { KAKAO_AUTH_URL } from '../config';

const login = () => {
    window.location.href = KAKAO_AUTH_URL;
};

function Login() {
    return (
        <div className="Login">
            <div className="background">
                <div className="login-button" onClick={login}>
                    <div className="kakao-chat" />
                    <div className="kakao-login">카카오 로그인</div>
                </div>
            </div>
        </div>
    );
}

export default Login;
