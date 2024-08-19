// 입출금 통장 정보를 알려주는 component

const Account = ({ account }) => {
    console.log('Account Data:', account);
    return (
        <div className="account">
            <h2>{account.name}</h2>
            <p>계좌 번호: {account.number}</p>
            <p>잔액: {account.amount}원</p>
            <p>캔 보유 여부: {account.hasCan ? '보유' : '미보유'}</p>
        </div>
    );
};

export default Account;
