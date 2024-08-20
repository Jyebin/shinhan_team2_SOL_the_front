import '../../assets/common/Container.css';

const Container = ({ children, style }) => {
    return (
        <div className="mobileViewContainer" style={style}>
            {children}
        </div>
    );
};

export default Container;
