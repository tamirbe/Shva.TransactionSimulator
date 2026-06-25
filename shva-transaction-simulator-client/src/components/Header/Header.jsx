import './Header.css';
import logo from '../../assets/logos/shva-logo.png';

function Header({ language, setLanguage }) {
    return (
        <header className="header">
            <div className="logo-placeholder">
                <img className="logo" src={logo} alt="Logo" />
            </div>

            <div className="language-buttons">
                <button
                    className={language === 'en' ? 'active' : ''}
                    onClick={() => setLanguage('en')}
                >
                    ENG
                </button>

                <button
                    className={language === 'he' ? 'active' : ''}
                    onClick={() => setLanguage('he')}
                >
                    עברית
                </button>
            </div>
        </header>
    );
}

export default Header;