import Container from '../components/common/Container';
import Account from '../components/myAccount/Account';

import '../assets/myAccountPage/MyAccountPage.css';

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
        <Container>
            <div className="accountsList">
                {mockData.map((account, index) => (
                    <Account key={index} account={account} />
                ))}
            </div>
        </Container>
    );
};

export default MyAccountPage;
