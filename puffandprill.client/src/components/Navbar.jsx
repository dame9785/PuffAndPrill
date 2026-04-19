import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    {/* logga här om du vill */}
                </div>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
                    <ul>
                        <li><Link to="/" onClick={() => setMenuOpen(false)}>Hem</Link></li>
                        <li><Link to="/snus" onClick={() => setMenuOpen(false)}>Snus</Link></li>
                        <li><Link to="/vape" onClick={() => setMenuOpen(false)}>Vapes</Link></li>
                        <li><Link to="/reviews" onClick={() => setMenuOpen(false)}>Recensioner</Link></li>
                        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Kontakt</Link></li>
                        <li><Link to="/about" onClick={() => setMenuOpen(false)}>Om oss</Link></li>
                        <li><Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link></li>
                        <li><Link to="/colab" onClick={() => setMenuOpen(false)}>Samarbete</Link></li>
                    </ul>

                {/*    <button className="login-btn">Logga in</button>*/}
                </nav>
            </div>
        </header>
    );
}

export default Navbar;