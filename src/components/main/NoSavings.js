// 적금이 없을 때
import SavingsMain from './SavingsMain';

import emptyImage from '../../assets/mainPage/img/main_empty.png';

const NoSavingsMain = () => {
    return <SavingsMain buttonClass="makeCan" imgSrc={emptyImage} />;
};

export default NoSavingsMain;
