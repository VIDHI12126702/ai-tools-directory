function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="logo">AI Tools Hub</div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#trending">Trending</a>
          <a href="#tools">Tools</a>
          <a href="#footer">About</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;