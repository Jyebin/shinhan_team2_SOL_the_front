import '../assets/depositHistoryPage/DepositHistoryPage.css';
import Container from '../components/common/Container';
import AccountInfo from '../components/depositHistory/AccountInfo';
import TransactionHistory from '../components/depositHistory/TransactionHistory';

import { useLocation } from 'react-router-dom';

const DepositHistoryPage = () => {
    const location = useLocation();
    const { account } = location.state;
    console.log(account);
    return (
        <Container
            style={{
                backgroundColor: '#f3f6fb',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            }}
        >
            <br />
            <br />
            <AccountInfo name={account.name} number={account.number} amount={account.balance} />
            <hr />
            <TransactionHistory />
        </Container>
    );
};

export default DepositHistoryPage;
