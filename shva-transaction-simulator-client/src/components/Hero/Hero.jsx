import './Hero.css';
import desktopImage from '../../assets/images/desktop.png';
import mobileImage from '../../assets/images/mobile.png';

function Hero({ language }) {
    const isHebrew = language === 'he';

    return (
        <div className="hero">
            <div className="hero-text-box">
                <span className="hero-badge">
                    {isHebrew ? 'סימולציית עסקה' : 'TRANSACTION SIMULATOR'}
                </span>
                <span className="hero-subtitle">
                    {isHebrew ? 'האם עסקה זו תאושר?' : 'Will this transaction be approved?'}
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