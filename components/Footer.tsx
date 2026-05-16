import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#4A0A0A', color: 'rgba(255,255,255,0.6)', padding: '40px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        <div>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', color: '#D4AC0D', fontSize: '1.25rem', fontWeight: 700 }}>Agra Heritage Hotel</p>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginTop: '4px' }}>Luxury · Heritage · Comfort</p>
        </div>
        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>© 2026 Agra Heritage Hotel. All rights reserved.</p>
        <Link href="#" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Terms & Conditions</Link>
      </div>
    </footer>
  );
}