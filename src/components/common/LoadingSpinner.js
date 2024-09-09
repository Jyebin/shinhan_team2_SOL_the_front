import '../../assets/common/LoadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <div className="LoadingSpinner">
            <div className="spinnerContainer">
                <div className="spinning-word">AI가 대답을 준비중 🤖</div>
                <br />
                <div id="spinner"></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
