import React, { useEffect, useContext } from 'react';
import ActiveSavings from '../components/main/ActiveSavings';
import NoSavings from '../components/main/NoSavings';
import { SavingsContext } from '../store/SavingsProvider';

const userID = 1;

const MainPage = () => {
    const {
        hasSavings: state,
        isInitialized,
        initialize,
    } = useContext(SavingsContext);

    useEffect(() => {
        initialize(userID); // 메인 페이지에 처음 접근할 때만 초기화
    }, [initialize]);

    if (!isInitialized) {
        return <p>Loading...</p>; // 초기화 중일 때 로딩 표시
    }

    if (state === null) {
        return <div>Loading...</div>;
    }

    return <div>{state ? <ActiveSavings /> : <NoSavings />}</div>;
};

export default MainPage;
