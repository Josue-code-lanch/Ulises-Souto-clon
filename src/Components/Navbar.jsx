import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SonoridadPlastica from "./SonoridadPlastica";
import MusicSupervision from "./MusicSupervision";
import Contact from "./Contact";
import Title from "./Title";
import "../Styles/Navbar.css";

export default function Navbar() {
  const [showTitle, setShowTitle] = useState(true); //HOOK PARA OCULTAR EL TITULO DE LA PANTALLA PRINCIPAL EN LAS DEMAS PANTALLAS.
  const location = useLocation(); // HOOK PARA SABER LA LOCALIZACION DE LA RUTA ACTUAL
  const [showDropdown, setShowDropdown] = useState(false); //HOOK PARA MOSTRAR EL MENU EN DROPDOWN EN DISPOSITIVOS MAS CHICOS.

  useEffect(() => {
    setShowTitle(location.pathname === "/");
  }, [location.pathname]);

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="menu">
        <p className="name-site">Ulises Souto</p>
        <button className="dropdown-toggle" onClick={handleToggleDropdown}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="40"
            fill="#fff"
            className="navbar-svg"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
      </div>
      <div className="navbar-container">
        <nav className={`${showDropdown ? "isActive" : ""}`}>
          <ul>
            <li>
              <Link
                className={`link ${
                  location.pathname === "/sonoridad-plastica" ? "active" : ""
                }`}
                to={"/sonoridad-plastica"}
              >
                SONORIDAD PLÁSTICA
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  location.pathname === "/work" ? "active" : ""
                }`}
                to={"/work"}
              >
                MUSIC SUPERVISION / PRODUCTION
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
                to={"/contact"}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {showTitle && <Title />}

      <AnimatePresence>
        <Routes>
          <Route path="/sonoridad-plastica" element={<SonoridadPlastica />} />
          <Route path="/work" element={<MusicSupervision />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
