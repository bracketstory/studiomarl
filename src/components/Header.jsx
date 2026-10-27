import { useState, useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    document.body.classList.toggle('menu', menuOpen);

    const handleEscape = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  return (
    <header className="site">
      <div className="wrap bar">
        <a className="mark" href="#top" aria-label="Studio Marl, home">
          Studio Marl<i>.</i>
        </a>
        <nav className={`main ${menuOpen ? 'open' : ''}`} id="nav" aria-label="Primary">
          <ul>
            <li>
              <a href="#work" onClick={closeMenu}>
                Work
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={closeMenu}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#studio" onClick={closeMenu}>
                Studio
              </a>
            </li>
            <li>
              <a href="#approach" onClick={closeMenu}>
                Approach
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <a className="avail meta" href="#contact">
          <span className="dot" aria-hidden="true"></span>Booking spring 2027
        </a>
        <button
          className="burger meta"
          id="burger"
          aria-expanded={menuOpen}
          aria-controls="nav"
          onClick={toggleMenu}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
    </header>
  );
};

export default Header;
