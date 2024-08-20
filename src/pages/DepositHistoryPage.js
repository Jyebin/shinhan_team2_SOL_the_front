import '../assets/depositHistoryPage/DepositHistoryPage.css';
import Container from '../components/common/Container';
import AccountInfo from '../components/depositHistory/AccountInfo';
import TransactionHistory from '../components/depositHistory/TransactionHistory';

const DepositHistoryPage = () => {
    return (
        <div>
            <Container>
                <AccountInfo />
                <TransactionHistory />
            </Container>
        </div>
    );
};

export default DepositHistoryPage;
