import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-icon">
            <Code2 size={25} />
          </span>
          <span>Nasir<span>Meraj</span></span>
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          <a
            href="/resume.pdf"
            download
            className="nav-resume mobile-resume"
          >
            Download Resume
          </a>
        </nav>

        <div className="nav-right">
          <a href="/resume.pdf" download className="nav-resume">
            Download Resume
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;