const MyAccountHeader = ({ imgSrc, headerName, headerCount }) => {
    return (
        <div className="myAccount-header">
            <img src={imgSrc} className="myAccount-header-img" />
            <p className="myAccount-header-name">{headerName}</p>
            <p className="myAccount-header-count">{headerCount}</p>
        </div>
    );
};

export default MyAccountHeader;
