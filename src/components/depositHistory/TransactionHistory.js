import Transaction from './Transaction';
import '../../assets/depositHistoryPage/TransactionHistory.css';

const transactionData = [
    {
        date: '2024.08.20 11:59:37',
        description: '토스페이 충전',
        amount: -21500,
        balance: 172604,
    },
    {
        date: '2024.08.19 19:36:00',
        description: '구글페이먼트코리',
        amount: -14900,
        balance: 194104,
    },
    {
        date: '2024.08.14 12:41:11',
        description: '국민취업지원',
        amount: +500000,
        balance: 500000,
    },
];

const TransactionHistory = () => {
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
