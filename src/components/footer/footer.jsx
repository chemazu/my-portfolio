import "./style.scss";
import { FaArrowUp, FaTwitter, FaCopyright } from "react-icons/fa";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };
  return (
    <section className="footer">
      <h2>
        Creative <br />
        Software Developer
      </h2>
      <div>
        <p>
          passionate about <br />
          creating memorable experiences
        </p>
      </div>
      <div className="footer-signout">
        {/* Back to top with up arrow icon */}
        <div className="button-wrapper">
          <button
            onClick={scrollToTop}
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "none",
              background: "none",
              cursor: "pointer",
            }}
          >
            <FaArrowUp style={{ marginRight: "8px" }} /> Back to top
          </button>
        </div>

        {/* Copyright section */}
        <div>
          <p>
            <FaCopyright style={{ marginRight: "4px" }} /> 2025 &#169; All
            rights reserved Chukwuemeka Chemazu
          </p>
        </div>

        {/* Follow section with Twitter link */}
        <div>
          <a
            href="https://twitter.com/cchemazu"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <FaTwitter style={{ marginRight: "8px" }} /> Follow
          </a>
        </div>
      </div>
    </section>
  );
}
