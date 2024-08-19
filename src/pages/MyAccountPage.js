import Container from '../components/common/Container';
import Account from '../components/myAccount/Account';
import MyAccountHeader from '../components/myAccount/MyAccountHeader';

import '../assets/myAccountPage/MyAccountPage.css';
import accountsImgUrl from '../assets/attendancePage/img/poorBird.png';
import savingsImgUrl from '../assets/attendancePage/img/flexBird.png';

const accountsData = [
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

const savingsData = [
    {
        name: '청년 주택드림 청약통장',
        number: '1073-118-146426',
        amount: 2500000,
    },
];

// const mockData = [];

const MyAccountPage = () => {
    return (
        <Container
            style={{
                backgroundColor: '#f3f6fb',
                display: 'flex',
                'flex-direction': 'column',
                'justify-content': 'flex-start',
            }}
        >
            <MyAccountHeader
                imgSrc={accountsImgUrl}
                headerName="입출금"
                headerCount="2"
            />
            <div className="accounts-list">
                {accountsData && accountsData.length > 0 ? (
                    accountsData.map((account, index) => (
                        <Account key={index} account={account} />
                    ))
                ) : (
                    <p>계좌 정보가 없습니다.</p>
                )}
            </div>

            <MyAccountHeader
                imgSrc={savingsImgUrl}
                headerName="적금"
                headerCount="1"
            />

            <div className="accounts-list">
                {savingsData && savingsData.length > 0 ? (
                    savingsData.map((account, index) => (
                        <Account key={index} account={account} />
                    ))
                ) : (
                    <p>계좌 정보가 없습니다.</p>
                )}
            </div>
        </Container>
    );
};

export default MyAccountPage;
