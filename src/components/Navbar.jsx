import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="logo">AI Tools Hub</div>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/#trending">Trending</a>
          <a href="/#tools">Tools</a>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;