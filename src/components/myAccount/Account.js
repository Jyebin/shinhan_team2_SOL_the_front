// 입출금 통장 정보를 알려주는 component

import '../../assets/myAccountPage/Account.css';
import dotsUrl from '../../assets/myAccountPage/img/dots.png';

const Account = ({ account }) => {
    console.log('Account Data:', account);
    return (
        <div className="account-container">
            <div className="account-header">
                <div>
                    <p className="account-number">{account.number}</p>
                    <p className="account-name">{account.name}</p>
                </div>
                <img src={dotsUrl} alt="dots" className="dots"></img>
            </div>
            <div className="account-body">
                <p className="account-amount">
                    {account.amount.toLocaleString()}원
                </p>
                <button className="account-transfer">이체</button>
            </div>
        </div>
    );
};

export default Account;
