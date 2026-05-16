"use client";
import { Waves, Utensils, Dumbbell, Car, Wifi, Clock } from "lucide-react";

const amenities = [
  { icon: <Waves size={28} />, title: "Swimming Pool", desc: "Temperature-controlled rooftop pool with Taj views" },
  { icon: <Utensils size={28} />, title: "Fine Dining", desc: "Authentic Awadhi & Mughlai cuisine restaurant" },
  { icon: <Dumbbell size={28} />, title: "Fitness Center", desc: "State-of-the-art gym with personal trainers" },
  { icon: <Car size={28} />, title: "Valet Parking", desc: "Secure 24-hour valet & self-parking facility" },
  { icon: <Wifi size={28} />, title: "High-Speed WiFi", desc: "Complimentary fiber internet throughout hotel" },
  { icon: <Clock size={28} />, title: "24/7 Concierge", desc: "Round-the-clock assistance for all your needs" },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" style={{ padding: '80px 16px', backgroundColor: '#5C0D0D' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ color: '#D4AC0D', fontSize: '0.7rem', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: 600 }}>
            World-Class Facilities
          </span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginTop: '8px' }}>
            Hotel Amenities
          </h2>
          <div style={{ width: '64px', height: '2px', backgroundColor: '#B8860B', margin: '16px auto 0' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {amenities.map((item) => (
            <div key={item.title} style={{
              border: '1px solid rgba(255,255,255,0.1)',
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '2px', padding: '24px',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(184,134,11,0.5)';
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
              }}
            >
              <div style={{ color: '#D4AC0D', marginBottom: '16px' }}>{item.icon}</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontSize: '1.25rem', fontWeight: 600, marginBottom: '8px' }}>
                {item.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}