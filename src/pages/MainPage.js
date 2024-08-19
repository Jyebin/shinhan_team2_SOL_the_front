import React, { useEffect, useState } from 'react';
import ActiveSavings from '../components/main/ActiveSavings'; // 컴포넌트 임포트
import NoSavings from '../components/main/NoSavings'; // 컴포넌트 임포트

const MainPage = () => {
    const [state, setState] = useState(null);

    useEffect(() => {
        // 적금 여부를 판단하는 함수 (예: 서버에서 데이터 가져오기)
        const hasSavings = checkSavingsStatus();

        if (hasSavings) {
            setState('ActiveSavings');
        } else {
            setState('NoSavings');
        }
    });

    const checkSavingsStatus = () => {
        // 여기에 적금 여부를 판단하는 로직 구현
        return false; // 임시로 true 반환 (적금이 있는 경우)
    };

    if (state === null) {
        // state가 설정되기 전에 로딩 화면 또는 빈 화면을 보여줄 수 있습니다.
        return <div>Loading...</div>;
    }

    return (
        <div>
            {state === 'ActiveSavings' ? <ActiveSavings /> : <NoSavings />}
        </div>
    );
};

export default MainPage;
