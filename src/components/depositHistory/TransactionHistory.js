import Transaction from './Transaction';
import '../../assets/depositHistoryPage/TransactionHistory.css';

const TransactionHistory = () => {
    return (
        <div className="transaction-history">
            <Transaction
                date="2024.07.26 03:25:57"
                month="24.07월분"
                description="50회차 적립식입금"
                amount="+50,000원"
                balance="잔액 2,500,000원"
            />
            <Transaction
                date="2024.06.26 03:22:37"
                month="24.06월분"
                description="49회차 적립식입금"
                amount="+50,000원"
                balance="잔액 2,450,000원"
            />
            <Transaction
                date="2024.05.28 17:21:46"
                month="24.05월분"
                description="48회차 적립식입금"
                amount="+50,000원"
                balance="잔액 2,400,000원"
            />
        </div>
    );
};

export default TransactionHistory;
