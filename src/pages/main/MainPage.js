import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // 적금 여부를 판단하는 함수 (예: 서버에서 데이터 가져오기)
        const hasSavings = checkSavingsStatus();

        if (hasSavings) {
            navigate('/active'); // 적금이 있으면 /active로 리다이렉트
        } else {
            navigate('/no'); // 적금이 없으면 /no로 리다이렉트
        }
    }, [navigate]);

    const checkSavingsStatus = () => {
        // 여기에 적금 여부를 판단하는 로직 구현
        return true; // 임시로 false 반환 (적금이 없는 경우)
    };

    return <div>Loading...</div>; // 리다이렉트 전 잠시 보여주는 로딩 화면
};

export default MainPage;
