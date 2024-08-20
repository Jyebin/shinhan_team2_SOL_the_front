import '../../assets/depositHistoryPage/AccountInfo.css';

const AccountInfo = () => {
    return (
        <div className="account-info">
            <div className="bank-info">
                <i className="bank-icon">🌊</i>
                <span className="account-number">우리 1073-118-146426</span>
            </div>
            <div className="account-name">청년 주택드림 청약통장</div>
            <div className="balance">2,500,000원</div>
            <div className="buttons">
                <button className="account-details-btn">계좌상세</button>
                <button className="deposit-btn">입금</button>
            </div>
        </div>
    );
};

export default AccountInfo;
