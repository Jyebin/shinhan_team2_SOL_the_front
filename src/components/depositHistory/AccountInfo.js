import '../../assets/depositHistoryPage/AccountInfo.css';

const AccountInfo = ({ name, number, amount }) => {
    return (
        <div className="account-info">
            <div className="bank-info">
                <i className="bank-icon">🌊</i>
                <span className="account-number">{number}</span>
            </div>
            <div className="account-name">{name}</div>
            <div className="balance">{amount.toLocaleString()}원</div>
            <div className="buttons">
                <button className="account-details-btn">계좌상세</button>
                <button className="deposit-btn">입금</button>
            </div>
        </div>
    );
};

export default AccountInfo;
