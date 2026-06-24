import './Header.css';
import logo from '../../assets/logos/shva-logo.png';

function Header() {
    return (
        <header className="header">
            <div className="logo-placeholder">
                <img className="logo" src={logo} alt="Logo" />
            </div>

            <div className="language-buttons">
                <button>ENG</button>

                <button className="active">
                    Hebrew
                </button>
            </div>
        </header>
    );
}

export default Header;