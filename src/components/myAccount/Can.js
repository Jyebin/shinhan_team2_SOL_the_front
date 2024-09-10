import canUrl from '../../assets/common/img/can_icon.png';

const Can = ({ onClick }) => {
    return (
        <div>
            <hr />
            <div className="extra-info" onClick={onClick}>
                <p className="extra-can">깡통</p>
                <img src={canUrl} className="extra-img" />
            </div>
        </div>
    );
};

export default Can;
