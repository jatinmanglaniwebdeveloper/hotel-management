import { MapPin, Phone, Clock } from "lucide-react";

export default function ContactSection() {
  const cards = [
    { icon: <MapPin size={22} />, title: "Address", lines: ["Plot No. 12, Fatehabad Road,", "Near Taj Mahal,", "Agra 282001, UP, India"] },
    { icon: <Phone size={22} />, title: "Contact", lines: ["+91 9876543210", "+91 9876543211", "hotel@agraheritage.com"] },
    { icon: <Clock size={22} />, title: "Temple Timings", lines: ["Morning: 05:00 AM", "Evening: 09:00 PM"] },
    { icon: <Clock size={22} />, title: "Hotel Timings", lines: ["Check In: 12:00 PM", "Check Out: 10:00 AM"] },
  ];
  return (
    <section id="contact" style={{ padding: '80px 16px', backgroundColor: '#F9F3E3' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ color: '#B8860B', fontSize: '0.7rem', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: 600 }}>Get In Touch</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#6B1111', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginTop: '8px' }}>Contact Us</h2>
          <div style={{ width: '64px', height: '2px', backgroundColor: '#B8860B', margin: '16px auto 0' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {cards.map(card => (
            <div key={card.title} style={{ backgroundColor: 'white', borderRadius: '2px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div style={{ color: '#B8860B', marginBottom: '12px' }}>{card.icon}</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#6B1111', fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>{card.title}</h3>
              {card.lines.map((line, i) => (
                <p key={i} style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.7 }}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}