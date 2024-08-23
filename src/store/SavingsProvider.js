import React, { createContext, useState } from 'react';
import axios from 'axios';

export const SavingsContext = createContext();

export const SavingsProvider = ({ children }) => {
    const [hasSavings, setHasSavings] = useState(null);
    const [isInitialized, setIsInitialized] = useState(false);

    const initialize = async (userID) => {
        if (!isInitialized) {
            try {
                setHasSavings(true);
                axios
                    .get(
                        'http://localhost:9070/account/hasCan?userID=' + userID,
                    )
                    .then((res) => {
                        setHasSavings(res.data);
                    });
                console.log(1);
            } catch (error) {
                console.error('Failed to fetch savings status', error);
            } finally {
                setIsInitialized(true); // 초기화 완료
            }
        }
    };

    return (
        <SavingsContext.Provider
            value={{ hasSavings, setHasSavings, isInitialized, initialize }}
        >
            {children}
        </SavingsContext.Provider>
    );
};
