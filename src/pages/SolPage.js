import React from 'react';
import { useNavigate } from 'react-router-dom';
import solMain from '../assets/mainPage/img/sol_main.png';
import '../assets/mainPage/MainPage.css';

const SolPage = () => {
    const navigate = useNavigate();

    const handleImageClick = (event) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left; // 클릭한 X 좌표
        const y = event.clientY - rect.top; // 클릭한 Y 좌표

        // 특정 영역 (20, 490) ~ (123, 590) 사이를 클릭했을 때
        if (x >= 20 && x <= 123 && y >= 490 && y <= 590) {
            navigate('/login'); // '/' 경로로 이동
        }
    };

    const handleMouseMove = (event) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // 특정 영역 (20, 490) ~ (123, 590) 사이에 마우스가 있을 때
        if (x >= 20 && x <= 123 && y >= 490 && y <= 590) {
            event.target.style.cursor = 'pointer'; // 마우스 포인터를 클릭 가능한 상태로 변경
        } else {
            event.target.style.cursor = 'default'; // 기본 마우스 포인터로 변경
        }
    };

    return (
        <div className="solContainer">
            <img
                src={solMain}
                alt="메인 이미지"
                className="solBackground"
                onClick={handleImageClick}
                onMouseMove={handleMouseMove}
            />
        </div>
    );
};

export default SolPage;
