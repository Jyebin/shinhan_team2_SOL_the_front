import '../../assets/common/LoadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <div className="LoadingSpinner">
            <div className="spinnerContainer">
                <div id="spinner"></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
