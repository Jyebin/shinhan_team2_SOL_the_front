// 적금이 있을 때
import SavingsMain from './SavingsMain';

import activeImage from '../../assets/mainPage/img/main_active.png';

const ActiveSavingsMain = () => {
    return <SavingsMain buttonClass="checkCan" imgSrc={activeImage} />;
};

export default ActiveSavingsMain;
