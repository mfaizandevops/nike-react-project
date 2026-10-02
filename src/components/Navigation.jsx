import { useState } from "react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="container">

      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>

      {/* Toggle Button */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Navigation Menu */}
      <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
        <li>
          <button className="login-btn">Login</button>
        </li>
      </ul>

    </nav>
  );
};

export default Navigation;
