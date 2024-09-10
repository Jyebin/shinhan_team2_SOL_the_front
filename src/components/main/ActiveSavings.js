import SavingsMain from './SavingsMain';

import activeImage from '../../assets/mainPage/img/main_active.png';

const ActiveSavings = ({ hasSavings }) => {
    return <SavingsMain hasSavings={hasSavings} imgSrc={activeImage} />;
};

export default ActiveSavings;
