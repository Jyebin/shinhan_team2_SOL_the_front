import React, { useEffect, useState } from 'react';
import ActiveSavings from '../components/main/ActiveSavings';
import NoSavings from '../components/main/NoSavings';

const MainPage = () => {
    const [state, setState] = useState(null);

    useEffect(() => {
        const hasSavings = checkSavingsStatus();

        if (hasSavings) {
            setState('ActiveSavings');
        } else {
            setState('NoSavings');
        }
    }, []);

    const checkSavingsStatus = () => {
        return false; // 예시로 적금을 가지고 있지 않은 것으로 설정
    };

    if (state === null) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {state === 'ActiveSavings' ? <ActiveSavings /> : <NoSavings />}
        </div>
    );
};

export default MainPage;
