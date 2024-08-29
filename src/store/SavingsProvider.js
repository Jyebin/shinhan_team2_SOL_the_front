import React, { createContext, useState } from 'react';
import axios from 'axios';

export const SavingsContext = createContext();

export const SavingsProvider = ({ children }) => {
    const [hasSavings, setHasSavings] = useState(null);

    const initialize = async () => {
        try {
            const res = await axios.get(
                'http://localhost:9070/api/user/hasCan',
                {
                    withCredentials: true, // 쿠키 포함
                },
            );
            setHasSavings(res.data);
        } catch (error) {
            console.error('Error initializing savings:', error);
            // 추가적인 에러 처리 로직이 필요하다면 여기에 작성합니다.
        }
    };

    return (
        <SavingsContext.Provider
            value={{ hasSavings, setHasSavings, initialize }}
        >
            {children}
        </SavingsContext.Provider>
    );
};
