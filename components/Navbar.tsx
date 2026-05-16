"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "Rooms", href: "/#rooms" },
    { label: "Amenities", href: "/#amenities" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.5s',
        backgroundColor: scrolled ? '#5C0D0D' : 'transparent',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.3)' : 'none',
        padding: scrolled ? '12px 0' : '20px 0',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span style={{ fontFamily: 'Cormorant Garamond, serif', color: '#D4AC0D', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '0.05em' }}>
            Agra Heritage
          </span>
          <span style={{ color: '#F9F3E3', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 300 }}>
            Luxury Hotel
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                style={{ color: '#F9F3E3', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#D4AC0D')}
                onMouseLeave={e => (e.currentTarget.style.color = '#F9F3E3')}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/booking"
              style={{
                backgroundColor: '#B8860B',
                color: 'white',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '10px 24px',
                borderRadius: '2px',
                textDecoration: 'none',
                transition: 'background-color 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#9A7209')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#B8860B')}
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          style={{ color: '#F9F3E3', background: 'none', border: 'none', cursor: 'pointer' }}
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ backgroundColor: '#5C0D0D', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }} className="md:hidden">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: '#F9F3E3', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setMenuOpen(false)}
            style={{ backgroundColor: '#B8860B', color: 'white', textAlign: 'center', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '10px 24px', borderRadius: '2px', textDecoration: 'none' }}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}