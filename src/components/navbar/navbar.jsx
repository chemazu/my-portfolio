import "./navbar.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // Import HashLink
export default function Navbar() {
  return (
    <div className="desktopNavbar">
      <Link
        to="/portfolio"
        style={{ textDecoration: "none", color: "inherit", visibility:"hidden" }}
      >
        Logo
      </Link>
      <div className="middle-links">
        <Link
          to="/portfolio"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <p>Index</p>
        </Link>
        {/* <Link
          to="/portfolio#portfolio-items"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <p>Projects</p>
        </Link> */}

        <HashLink
          to="/portfolio#portfolio-items"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Projects
        </HashLink>
      </div>
      <div className="contact">
        <Link
          to="/contact"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <p>Let&apos;s Talk</p>
        </Link>
      </div>
    </div>
  );
}
