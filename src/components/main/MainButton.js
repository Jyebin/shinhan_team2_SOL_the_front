const MainButton = ({ onClick, className }) => {
    return (
        <button className={`mainBtn ${className}`} onClick={onClick}></button>
    );
};

export default MainButton;
