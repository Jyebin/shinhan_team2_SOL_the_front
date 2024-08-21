// 입출금 통장 정보를 알려주는 component

import { useNavigate } from 'react-router-dom';
import '../../assets/myAccountPage/Account.css';
import dotsUrl from '../../assets/myAccountPage/img/dots.png';

import Can from './Can';

const Account = ({ account }) => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/depositHistory', { state: { account } });
    };
    return (
        <div className="account-container" onClick={onClick}>
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

            {account.hasCan && ( // hasCan이 true인 경우에만 표시\
                <Can />
            )}
        </div>
    );
};

export default Account;
