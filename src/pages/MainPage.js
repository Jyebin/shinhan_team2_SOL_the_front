import React, { useEffect, useContext } from 'react';
import ActiveSavings from '../components/main/ActiveSavings';
import NoSavings from '../components/main/NoSavings';
import { SavingsContext } from '../store/SavingsProvider';

const MainPage = () => {
    const { hasSavings, initialize } = useContext(SavingsContext);

    useEffect(() => {
        initialize(); // 메인 페이지에 처음 접근할 때 초기화
    }, [initialize]);

    if (hasSavings === null) {
        return <div>Loading...</div>;
    }

    return <div>{hasSavings ? <ActiveSavings /> : <NoSavings />}</div>;
};

export default MainPage;
