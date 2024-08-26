import React from 'react';
import '../../assets/depositHistoryPage/Transaction.css';

const Transaction = ({ transaction }) => {
    const amountStatus =
        transaction.status ? 'amount-positive' : 'amount-negative';
    const amountStatusname =
        transaction.status ? '입금' : '출금';
    return (
        <div className="transaction">
            <span className="transaction-date">{transaction.date}</span>
            <span className="transaction-time"> {transaction.time}</span>
            <span className={`deposit-status ${amountStatus}`}>
                {amountStatusname}
            </span>
            <div className="transaction-info">
                <span className="description">{transaction.description}</span>
                <span className={`amount ${amountStatus}`}>
                    {transaction.amount.toLocaleString()}원
                </span>
            </div>
            <div className="balance-info">
                {transaction.balance.toLocaleString()}원
            </div>
        </div>
    );
};

export default Transaction;
