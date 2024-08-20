import '../../assets/depositHistoryPage/AccountInfo.css';

import logoImageUrl from '../../assets/depositHistoryPage/img/bank_logo.png';

const AccountInfo = ({ name, number, amount }) => {
    return (
        <div className="account-info">
            <div className="bank-info">
                <img src={logoImageUrl} className="bank-logo"></img>
                <span className="account-name">{name}</span>
            </div>
            <div className="account-number">신한 {number}</div>
            <div className="balance">{amount.toLocaleString()}원</div>
            <div className="buttons">
                <button className="account-details-btn">이체</button>
                <button className="deposit-btn">계좌관리</button>
            </div>
        </div>
    );
};

export default AccountInfo;
