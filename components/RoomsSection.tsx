"use client";
import Link from "next/link";
import { Wifi, Wind, Coffee, Car, Eye, Utensils } from "lucide-react";

const rooms = [
  {
    name: "Heritage Deluxe Room",
    category: "Deluxe AC · Double",
    price: 2499,
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    amenities: ["AC", "WiFi", "Breakfast", "Room Service"],
  },
  {
    name: "Taj View Suite",
    category: "Luxury Suite · King",
    price: 4999,
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    amenities: ["AC", "WiFi", "Taj View", "Breakfast"],
  },
  {
    name: "Royal Mughal Suite",
    category: "Premium Suite · King",
    price: 7999,
    img: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=800&q=80",
    amenities: ["AC", "WiFi", "Taj View", "Parking"],
  },
];

export default function RoomsSection() {
  return (
    <section id="rooms" style={{ padding: '80px 16px', backgroundColor: '#FDFAF4' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ color: '#B8860B', fontSize: '0.7rem', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: 600 }}>
            Accommodations
          </span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#6B1111', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginTop: '8px' }}>
            Our Rooms & Suites
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '0.875rem', marginTop: '12px', maxWidth: '500px', margin: '12px auto 0' }}>
            Curated rooms reflecting the grandeur of Mughal architecture
          </p>
          <div style={{ width: '64px', height: '2px', backgroundColor: '#B8860B', margin: '16px auto 0' }} />
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {rooms.map((room) => (
            <div key={room.name} style={{ backgroundColor: 'white', borderRadius: '2px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', transition: 'box-shadow 0.3s' }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)')}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={room.img} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {room.amenities.slice(0, 3).map(a => (
                    <span key={a} style={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', fontSize: '0.65rem', padding: '2px 8px', borderRadius: '2px' }}>
                      {a}
                    </span>
                  ))}
                </div>
              </div>
              {/* Content */}
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#6B1111', fontSize: '1.35rem', fontWeight: 700 }}>
                  {room.name}
                </h3>
                <p style={{ color: '#9CA3AF', fontSize: '0.75rem', marginTop: '2px' }}>{room.category}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px' }}>
                  <div>
                    <span style={{ fontFamily: 'Cormorant Garamond, serif', color: '#B8860B', fontSize: '1.5rem', fontWeight: 700 }}>
                      ₹{room.price.toLocaleString()}
                    </span>
                    <span style={{ color: '#9CA3AF', fontSize: '0.75rem', marginLeft: '4px' }}>/night</span>
                  </div>
                  <Link href="/booking" style={{
                    backgroundColor: '#7A1515', color: 'white',
                    fontSize: '0.7rem', fontWeight: 600,
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    padding: '10px 20px', borderRadius: '2px', textDecoration: 'none',
                  }}>
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}