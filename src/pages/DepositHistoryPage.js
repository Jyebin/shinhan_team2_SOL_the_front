import '../assets/depositHistoryPage/DepositHistoryPage.css';
import Container from '../components/common/Container';
import AccountInfo from '../components/depositHistory/AccountInfo';
import TransactionHistory from '../components/depositHistory/TransactionHistory';

import { useLocation } from 'react-router-dom';

const DepositHistoryPage = () => {
    const location = useLocation();
    const { account } = location.state;

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
            <AccountInfo name={account.name} balance={account.balance} number={account.number} />
            <hr />
            <TransactionHistory accountID={account.accountID} />
        </Container>
    );
};

export default DepositHistoryPage;
