import Transaction from './Transaction';
import '../../assets/depositHistoryPage/TransactionHistory.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const TransactionHistory = (accountID) => {
    const id = accountID.accountID; // 객체 -> 변수 변환

    const [transactionData, setTransactionData] = useState([]);

    const getTransactionList = async (accountID) => {
        try {
            const res = await axios.get(
                'http://localhost:9070/api/account/transaction/list?accountID=' +
                    accountID,
            );
            console.log(res.data);
            setTransactionData(res.data);
        } catch (error) {
            console.error('Failed to fetch "getAccountList"', error);
        }
    };

    useEffect(() => {
        getTransactionList(id);
    }, []); // 빈 배열을 사용하여 컴포넌트가 마운트될 때 한 번만 실행

    return (
        <div className="transaction-history">
            {transactionData && transactionData.length > 0 ? (
                transactionData.map((transaction, index) => (
                    <Transaction key={index} transaction={transaction} />
                ))
            ) : (
                <p>계좌 정보가 없습니다.</p>
            )}
        </div>
    );
};

export default TransactionHistory;
