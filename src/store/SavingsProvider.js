import React, { createContext, useState } from 'react';
import axios from 'axios';

export const SavingsContext = createContext();

export const SavingsProvider = ({ children }) => {
    const [hasSavings, setHasSavings] = useState(null);
    const [isInitialized, setIsInitialized] = useState(false);

    const initialize = async () => {
        // context 초기화하는 코드
        if (!isInitialized) {
            try {
                axios
                    .get('http://localhost:9070/api/user/hasCan', {
                        withCredentials: true, // 쿠키 포함
                    })
                    .then((res) => {
                        setHasSavings(res.data);
                    });
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
