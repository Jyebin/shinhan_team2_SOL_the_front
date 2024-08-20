import '../assets/depositHistoryPage/DepositHistoryPage.css';
import Container from '../components/common/Container';
import AccountInfo from '../components/depositHistory/AccountInfo';
import TransactionHistory from '../components/depositHistory/TransactionHistory';

const DepositHistoryPage = () => {
    return (
        <Container
            style={{
                backgroundColor: '#f3f6fb',
                display: 'flex',
                'flex-direction': 'column',
                'justify-content': 'flex-start',
            }}
        >
            <AccountInfo />
            <TransactionHistory />
        </Container>
    );
};

export default DepositHistoryPage;
