import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer-content">
        <h3>AI Tools Hub</h3>

        <p>
          A simple directory to discover useful AI tools for work, creativity,
          and productivity.
        </p>

        {/* ✅ ADD THIS SECTION */}
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <p className="footer-note">
          © 2026 AI Tools Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;