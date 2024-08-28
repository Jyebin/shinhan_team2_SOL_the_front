import React, { useState, useEffect } from 'react';
import Container from '../components/common/Container';
import Account from '../components/myAccount/Account';
import axios from 'axios';
import MyAccountHeader from '../components/myAccount/MyAccountHeader';

import '../assets/myAccountPage/MyAccountPage.css';
import accountsImgUrl from '../assets/attendancePage/img/poorBird.png';
import savingsImgUrl from '../assets/attendancePage/img/flexBird.png';

const savingsData = [
    {
        name: '청년 주택드림 청약통장',
        number: '1073-118-146426',
        balance: 2500000,
    },
];

const MyAccountPage = () => {
    const [accountsData, setAccountsData] = useState([]);

    const getAccountList = async () => {
        try {
            const res = await axios.get(
                'http://localhost:9070/api/account/list',
                {
                    withCredentials: true, // 쿠키 포함
                },
            );
            setAccountsData(res.data);
        } catch (error) {
            console.error('Failed to fetch "getAccountList"', error);
        }
    };

    useEffect(() => {
        getAccountList();
    }, []); // 빈 배열을 사용하여 컴포넌트가 마운트될 때 한 번만 실행

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
            <MyAccountHeader
                imgSrc={accountsImgUrl}
                headerName="입출금"
                headerCount={accountsData.length}
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
                headerCount={savingsData.length}
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
