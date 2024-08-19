import Container from '../components/common/Container';
import Account from '../components/myAccount/Account';

import '../assets/myAccountPage/MyAccountPage.css';
import accountsImgUrl from '../assets/myAccountPage/img/accounts.png';

const mockData = [
    {
        name: '쏠편한 입출금통장(저축예금)',
        number: '110-576-040419',
        amount: 25000,
        hasCan: true,
    },
    {
        name: '스무살 우리 통장',
        number: '1002-459-729439',
        amount: 50000,
        hasCan: false,
    },
];

const MyAccountPage = () => {
    return (
        <Container
            style={{
                backgroundColor: '#f3f6fb',
                display: 'flex',
                'flex-direction': 'column',
            }}
        >
            <div className="first-header">
                <img src={accountsImgUrl} className="omok-img" />
                <p className="first-category">입출금</p>
                <p className="first-count">2</p>
            </div>
            <div className="accounts-list">
                {mockData.map((account, index) => (
                    <Account key={index} account={account} />
                ))}
            </div>
        </Container>
    );
};

export default MyAccountPage;
