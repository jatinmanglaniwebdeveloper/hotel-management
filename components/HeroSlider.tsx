"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    bg: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600&q=80",
    tag: "Royal Hospitality",
    title: "Agra Heritage",
    subtitle: "Hotel & Suites",
    desc: "Experience timeless luxury steps away from the Taj Mahal",
  },
  {
    bg: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&q=80",
    tag: "Elegant Rooms",
    title: "Mughal",
    subtitle: "Inspired Stays",
    desc: "Where history meets modern comfort in the heart of Agra",
  },
  {
    bg: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&q=80",
    tag: "Fine Dining",
    title: "Culinary",
    subtitle: "Excellence",
    desc: "Authentic Awadhi cuisine crafted by master chefs",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: '600px', overflow: 'hidden', width: '100%' }}>
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          style={{
            position: 'absolute', inset: 0,
            transition: 'opacity 1s ease',
            opacity: i === current ? 1 : 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={slide.bg} alt={slide.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.3), rgba(0,0,0,0.6))' }} />
        </div>
      ))}

      {/* Center Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        height: '100%',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '0 16px',
      }}>
        <span style={{
          display: 'inline-block',
          border: '1px solid rgba(212,172,13,0.5)',
          backgroundColor: 'rgba(184,134,11,0.15)',
          color: '#F4D03F',
          fontSize: '0.7rem', letterSpacing: '0.4em', textTransform: 'uppercase',
          padding: '6px 16px', borderRadius: '2px', marginBottom: '24px',
        }}>
          {slides[current].tag}
        </span>

        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          color: 'white', fontSize: 'clamp(2.5rem, 7vw, 5rem)',
          fontWeight: 700, lineHeight: 1.1,
        }}>
          {slides[current].title}
          <br />
          <span style={{ color: '#D4AC0D' }}>{slides[current].subtitle}</span>
        </h1>

        <p style={{ color: '#F0E6C8', fontSize: '1.1rem', marginTop: '16px', maxWidth: '500px', fontWeight: 300 }}>
          {slides[current].desc}
        </p>

        <Link
          href="/booking"
          style={{
            marginTop: '32px',
            backgroundColor: '#B8860B', color: 'white',
            fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            padding: '16px 40px', borderRadius: '2px',
            textDecoration: 'none', transition: 'all 0.2s',
            display: 'inline-block',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#9A7209')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#B8860B')}
        >
          Reserve Your Suite
        </Link>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prev}
        style={{
          position: 'absolute', left: '24px', top: '50%', transform: 'translateY(-50%)',
          zIndex: 10, backgroundColor: 'rgba(0,0,0,0.35)', border: 'none',
          color: 'white', borderRadius: '50%', width: '44px', height: '44px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', transition: 'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.6)')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.35)')}
      >
        <ChevronLeft size={22} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        style={{
          position: 'absolute', right: '24px', top: '50%', transform: 'translateY(-50%)',
          zIndex: 10, backgroundColor: 'rgba(0,0,0,0.35)', border: 'none',
          color: 'white', borderRadius: '50%', width: '44px', height: '44px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', transition: 'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.6)')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.35)')}
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', gap: '12px' }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? '32px' : '8px',
              height: '4px',
              borderRadius: '2px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              backgroundColor: i === current ? '#D4AC0D' : 'rgba(255,255,255,0.4)',
            }}
          />
        ))}
      </div>
    </section>
  );
}