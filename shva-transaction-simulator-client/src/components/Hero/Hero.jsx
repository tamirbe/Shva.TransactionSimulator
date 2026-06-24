import './Hero.css';
import desktopImage from '../../assets/images/desktop.png';
import mobileImage from '../../assets/images/mobile.png';

function Hero() {
    return (
        <div className="hero">
            <div className="hero-text-box">
                <span className="hero-badge">TRANSACTION SIMULATOR</span>
                <span className="hero-subtitle">
                    Will this transaction be approved?
                </span>
            </div>
            <div className="hero-image-placeholder">
                <img className="hero-image" src={desktopImage} alt="desktopImage" />
                <img className="mobile-image" src={mobileImage} alt="mobileImage" />
            </div>
        </div>
    );
}

export default Hero;