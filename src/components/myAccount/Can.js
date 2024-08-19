import canUrl from '../../assets/common/img/can_icon.png';

const Can = () => {
    return (
        <div>
            <hr />
            <div className="extra-info">
                <p className="extra-can">깡통</p>
                <img src={canUrl} className="extra-img" />
            </div>
        </div>
    );
};

export default Can;
