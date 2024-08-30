import SavingsMain from './SavingsMain';

import emptyImage from '../../assets/mainPage/img/main_empty.png';

const NoSavings = ({ hasSavings }) => {
    return <SavingsMain hasSavings={hasSavings} imgSrc={emptyImage} />;
};

export default NoSavings;
