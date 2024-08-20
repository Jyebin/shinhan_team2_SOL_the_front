import Container from '../components/common/Container';
import canUrl from '../assets/common/img/can_img.png';
import '../assets/myCan/MyCanPage.css';

const MyCanPage = () => {
    return (
        <Container
            style={{
                backgroundColor: '#f3f6fb',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            }}
        >
            <div className="bucket-content">
                <h2 className="content-title">깡통에 얼마나 모였을까요?</h2>
                <p className="content-subtitle">깡통을 눌러 뒤집어주세요</p>
            </div>

            <div className="bucket-image-container">
                <img src={canUrl} alt="bucket" className="bucket-image" />
            </div>

            <div className="button-container">
                <button className="main-button">깡통 해지하기</button>
            </div>
        </Container>
    );
};

export default MyCanPage;
