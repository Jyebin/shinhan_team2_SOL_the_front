import '../assets/depositHistoryPage/DepositHistoryPage.css';
import Container from '../components/common/Container';
import AccountInfo from '../components/depositHistory/AccountInfo';
import TransactionHistory from '../components/depositHistory/TransactionHistory';

// 예비 데이터
const name = '쏠편한 입출금통장(저축예금)';
const number = '110-576-040419';
const amount = 25000;

const DepositHistoryPage = () => {
    return (
        <Container
            style={{
                backgroundColor: '#f3f6fb',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            }}
        >
            <AccountInfo name={name} number={number} amount={amount} />
            <TransactionHistory />
        </Container>
    );
};

export default DepositHistoryPage;
