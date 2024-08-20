import React from 'react';
import '../../assets/depositHistoryPage/Transaction.css';

const Transaction = ({ date, month, description, amount, balance }) => {
    return (
        <div className="transaction">
            <div className="transaction-date">
                {date} | {month}
            </div>
            <div className="transaction-info">
                <span className="description">{description}</span>
                <span className="amount">{amount}</span>
            </div>
            <div className="balance-info">{balance}</div>
        </div>
    );
};

export default Transaction;
