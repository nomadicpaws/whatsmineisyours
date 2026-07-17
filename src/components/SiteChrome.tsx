import { Link } from '@tanstack/react-router'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <Link to="/" className="wordmark" aria-label="Second Story home">
        Second <i>Story</i>
      </Link>
      <nav className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`} aria-label="Main navigation">
        <a href="/#new">New in</a>
        <a href="/#shop">Shop</a>
        <a href="/#how-it-works">How it works</a>
        <a href="mailto:hello@secondstory.market">Sell an item</a>
      </nav>
      <div className="header-actions">
        <a className="icon-button hide-mobile" href="/#shop" aria-label="Search products">
          <Search size={19} strokeWidth={1.6} />
        </a>
        <a className="icon-button" href="/#shop" aria-label="Shopping bag">
          <ShoppingBag size={19} strokeWidth={1.6} />
          <span className="bag-count">0</span>
        </a>
        <button
          className="icon-button menu-button"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link to="/" className="wordmark wordmark--footer">
          Second <i>Story</i>
        </Link>
        <p>Good pieces deserve more than one life.</p>
      </div>
      <div className="footer-links">
        <a href="/#shop">Browse</a>
        <a href="mailto:hello@secondstory.market">Sell with us</a>
        <a href="mailto:hello@secondstory.market">Contact</a>
      </div>
      <p className="footer-note">Curated resale, thoughtfully recirculated.</p>
    </footer>
  )
}
