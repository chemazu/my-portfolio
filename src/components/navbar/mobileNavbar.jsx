import { useState } from "react";
import burger from "../../assets/img/burger.svg";
import close from "../../assets/img/close.svg";

import "./navbar.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; 
export default function Navbar() {
  const [active, setActive] = useState(false);
  const handleLinkClick = () => {
    setActive(false);  
  };
  return (
    <div className="mobile-nav">
      <div className="top-div">
        <p>chemazu</p>
        {active ? (
          <img
            src={close}
            onClick={() => {
              setActive(!active);
            }}
          />
        ) : (
          <img
            src={burger}
            onClick={() => {
              setActive(!active);
            }}
          />
        )}
      </div>
      {active && (
        <div className="bottom-div">
          <div className="top-div-bottom">
            <p>chemazu</p>{" "}
            <img
              style={{ height: "20px", width: "20px" }}
              src={close}
              onClick={() => {
                setActive(!active);
              }}
            />
          </div>
          <div className="menu-div">
            <Link
              onClick={handleLinkClick}
              to="/portfolio"
              style={{
                textDecoration: "none",
                color: "inherit",
                visibility: "hidden",
              }}
            >
              chemazu
            </Link>
            <div className="middle-links">
              <Link
                onClick={handleLinkClick}
                to="/portfolio"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p>Index</p>
              </Link>
              <HashLink
                onClick={handleLinkClick}
                to="/portfolio#portfolio-items"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Projects
              </HashLink>
            </div>
            <div className="contact">
              <Link
                onClick={handleLinkClick}
                to="/contact"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p>Let&apos;s Talk</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
