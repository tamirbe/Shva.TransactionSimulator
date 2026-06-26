import './Header.css';
import logo from '../../assets/logos/shva-logo.png';

function Header({ language, setLanguage, theme, setTheme }) {
    return (
        <header className="header">
            <div className="logo-placeholder">
                <img className="logo" src={logo} alt="Logo" />
            </div>

            <div className="header-actions">
                <button
                    type="button"
                    className="theme-toggle"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                    {theme === 'dark' ? 'Light' : 'Dark'}
                </button>

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
            </div>
        </header>
    );
}

export default Header;