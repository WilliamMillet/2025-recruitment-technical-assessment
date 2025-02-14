import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [doorOpen, setDoorOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.body.classList = darkMode ? 'dark-mode' : 'light-mode'
  }, [darkMode]);

  return (
    <header className="main-header">
      <nav>
        <Link
          className="default-link-styling freerooms-main-title-link"
          to="/"
          onClick={() => setDoorOpen((prev) => !prev)}
        >
          <img
            src={`/assets/${
              doorOpen ? "freeRoomsLogo.png" : "freeroomsDoorClosed.png"
            }`}
            alt="FreeRooms logo"
            className="free-rooms-logo-header-icon"
          />
          <h1 className="freerooms-main-title-text">Freerooms</h1>
        </Link>
        <div className="header-main-options">
          <button className="header-search-btn header-main-options-btn">
            <span className="material-symbols-rounded">search</span>
          </button>
          <NavLink
            to="/grid"
            className="default-link-styling header-main-options-btn"
          >
            <span className="material-symbols-rounded">grid_view</span>
          </NavLink>
          <NavLink
            to="/map"
            className="default-link-styling header-main-options-btn"
          >
            <span className="material-symbols-rounded">map</span>
          </NavLink>
          <button
            className={`toggle-dark-mode-btn header-main-options-btn ${
              darkMode ? "active" : ""
            }`}
            onClick={() => setDarkMode((prev) => !prev)}
          >
            <span className="material-symbols-rounded">dark_mode</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
