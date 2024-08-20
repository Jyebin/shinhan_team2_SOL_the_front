import React from 'react';
import '../../assets/depositHistoryPage/Transaction.css';

const Transaction = ({ transaction }) => {
    return (
        <div className="transaction">
            <span className="transaction-date">{transaction.date}</span>
            <span className="transaction-time"> {transaction.time}</span>
            <div className="transaction-info">
                <span className="description">{transaction.description}</span>
                <span className="amount">
                    {transaction.amount.toLocaleString()}원
                </span>
            </div>
            <div className="balance-info">
                잔액 {transaction.balance.toLocaleString()}원
            </div>
        </div>
    );
};

export default Transaction;
