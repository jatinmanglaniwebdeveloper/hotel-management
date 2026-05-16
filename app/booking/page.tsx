"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, X, ChevronLeft } from "lucide-react";

type Step = 1 | 2 | 3 | 4;

const rooms = [
  {
    id: 1,
    name: "Heritage Deluxe Room",
    category: "Deluxe AC",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    amenities: ["AC", "WiFi", "Breakfast", "Room Service", "24hr Hot Water"],
    fits: "2 Adults",
    bedType: "Double",
    price: 2499,
    available: 3,
  },
  {
    id: 2,
    name: "Taj View Suite",
    category: "Luxury Suite",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    amenities: ["AC", "WiFi", "Taj View", "Breakfast", "Room Service", "Balcony"],
    fits: "2 Adults + 1 Child",
    bedType: "King",
    price: 4999,
    available: 2,
  },
];

// Step Indicator
function StepIndicator({ current }: { current: Step }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {[1, 2, 3, 4].map((s, i) => (
        <div key={s} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-sans text-sm font-semibold transition-all duration-300 ${
              s <= current
                ? "bg-maroon-600 text-white"
                : "bg-gray-200 text-gray-400"
            }`}
          >
            {s < current ? <Check size={16} /> : s}
          </div>
          {i < 3 && (
            <div
              className={`w-12 sm:w-20 h-0.5 transition-colors duration-300 ${
                s < current ? "bg-maroon-600" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function BookingPage() {
  const [step, setStep] = useState<Step>(1);
  const [isMember, setIsMember] = useState<boolean | null>(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numRooms, setNumRooms] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState<(typeof rooms)[0] | null>(null);
  const [roomCount, setRoomCount] = useState(1);
  const [additionalMembers, setAdditionalMembers] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    idType: "Aadhaar Card",
    idNumber: "",
    description: "",
    agreed: false,
  });
  const [confirmed, setConfirmed] = useState(false);

  const totalNights =
    checkIn && checkOut
      ? Math.max(
          1,
          Math.round(
            (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 1;

  const total = selectedRoom
    ? selectedRoom.price * roomCount * totalNights
    : 0;

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.whatsapp || !form.agreed) return;
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-sm shadow-lg p-10 text-center max-w-md w-full">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={32} className="text-green-600" />
          </div>
          <h2 className="font-serif text-maroon-700 text-3xl font-bold">Booking Confirmed!</h2>
          <p className="text-gray-500 font-sans text-sm mt-3 leading-relaxed">
            Thank you, <strong>{form.name}</strong>! Your booking for{" "}
            <strong>{selectedRoom?.name}</strong> from{" "}
            <strong>{checkIn}</strong> to <strong>{checkOut}</strong> has been
            received. We'll send confirmation to <strong>{form.email}</strong>.
          </p>
          <div className="mt-4 bg-cream-100 rounded-sm p-4">
            <p className="font-sans text-sm text-gray-600">
              Total Amount:{" "}
              <span className="font-bold text-gold-500 text-lg">
                ₹{total.toLocaleString()}
              </span>
            </p>
          </div>
          <Link
            href="/"
            className="mt-6 inline-block bg-maroon-600 hover:bg-maroon-700 text-white font-sans text-sm font-semibold tracking-widest uppercase px-8 py-3 rounded-sm transition-colors"
          >
            Back to Homes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Top Bar */}
      <div className="bg-maroon-800 py-4 px-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-gold-400 text-xl font-bold"
        >
          Agra Heritage Hotel
        </Link>
        <Link
          href="/"
          className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-sans text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-sm transition-colors"
        >
          Cancel Booking
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="font-serif text-maroon-700 text-4xl sm:text-5xl font-bold text-center mb-2">
          Book Your Stay
        </h1>
        <p className="text-center text-gray-400 font-sans text-sm mb-10">
          Complete the steps below to reserve your room
        </p>

        <StepIndicator current={step} />

        {/* ── STEP 1: Membership ── */}
        {step === 1 && (
          <div className="bg-white rounded-sm shadow-md p-8">
            <h2 className="font-serif text-maroon-700 text-2xl font-bold text-center mb-8">
              Are you a Loyalty Member?
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: true, icon: <Check size={32} />, label: "Yes, I am" },
                { val: false, icon: <X size={32} />, label: "No, I'm not" },
              ].map((opt) => (
                <button
                  key={String(opt.val)}
                  onClick={() => {
                    setIsMember(opt.val);
                    setStep(2);
                  }}
                  className={`border-2 rounded-sm py-8 flex flex-col items-center gap-3 transition-all duration-200 hover:border-maroon-500 hover:bg-maroon-50 ${
                    isMember === opt.val
                      ? "border-maroon-600 bg-maroon-50"
                      : "border-gray-200"
                  }`}
                >
                  <span className="text-gray-400">{opt.icon}</span>
                  <span className="font-sans font-semibold text-gray-700">
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── STEP 2: Select Dates ── */}
        {step === 2 && (
          <div className="bg-white rounded-sm shadow-md p-8">
            <button
              onClick={() => setStep(1)}
              className="flex items-center gap-1 text-gold-500 hover:text-gold-600 font-sans text-sm mb-6 transition-colors"
            >
              <ChevronLeft size={16} /> Back
            </button>
            <h2 className="font-serif text-maroon-700 text-2xl font-bold mb-6">
              Select Your Dates
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-sans text-sm font-medium text-gray-600 mb-1">
                  Check-in Date
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full border border-gray-200 rounded-sm px-4 py-3 font-sans text-sm focus:outline-none focus:border-maroon-500"
                />
              </div>
              <div>
                <label className="block font-sans text-sm font-medium text-gray-600 mb-1">
                  Check-out Date
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn || new Date().toISOString().split("T")[0]}
                  className="w-full border border-gray-200 rounded-sm px-4 py-3 font-sans text-sm focus:outline-none focus:border-maroon-500"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block font-sans text-sm font-medium text-gray-600 mb-1">
                Number of Rooms
              </label>
              <input
                type="number"
                min={1}
                max={5}
                value={numRooms}
                onChange={(e) => setNumRooms(Number(e.target.value))}
                className="w-full sm:w-48 border border-maroon-400 rounded-sm px-4 py-3 font-sans text-sm focus:outline-none focus:border-maroon-600"
              />
            </div>
            <button
              onClick={() => {
                if (checkIn && checkOut) setStep(3);
              }}
              disabled={!checkIn || !checkOut}
              className="w-full bg-maroon-600 hover:bg-maroon-700 disabled:bg-gray-300 text-white font-sans font-semibold text-sm tracking-widest uppercase py-4 rounded-sm transition-colors duration-200"
            >
              Check Availability
            </button>
          </div>
        )}

        {/* ── STEP 3: Available Rooms ── */}
        {step === 3 && (
          <div className="bg-white rounded-sm shadow-md p-8">
            <button
              onClick={() => setStep(2)}
              className="flex items-center gap-1 text-gold-500 hover:text-gold-600 font-sans text-sm mb-6 transition-colors"
            >
              <ChevronLeft size={16} /> Back
            </button>
            <h2 className="font-serif text-maroon-700 text-2xl font-bold mb-1">
              Available Rooms
            </h2>
            <p className="text-gray-400 font-sans text-xs mb-6">
              {checkIn} to {checkOut} · {totalNights} night
              {totalNights > 1 ? "s" : ""}
            </p>

            <div className="flex flex-col gap-6">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  className="border border-gray-100 rounded-sm overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={room.img}
                      alt={room.name}
                      className="w-full sm:w-48 h-40 sm:h-auto object-cover"
                    />
                    <div className="p-5 flex-1">
                      <h3 className="font-serif text-maroon-700 text-xl font-bold">
                        {room.name}
                      </h3>
                      <p className="text-gray-400 font-sans text-xs mb-2">
                        {room.category}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {room.amenities.map((a) => (
                          <span
                            key={a}
                            className="bg-cream-100 text-gray-600 text-xs px-2 py-0.5 rounded-sm font-sans"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                      <p className="text-green-600 font-sans text-xs font-semibold">
                        {room.available} rooms available
                      </p>
                      <p className="text-gray-500 font-sans text-xs">
                        Fits: {room.fits} · Bed: {room.bedType}
                      </p>
                      <div className="flex gap-3 mt-4">
                        <button className="border border-maroon-500 text-maroon-600 hover:bg-maroon-50 font-sans text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-sm transition-colors">
                          See Details
                        </button>
                        <button
                          onClick={() => {
                            setSelectedRoom(room);
                            setRoomCount(numRooms);
                            setStep(4);
                          }}
                          className="bg-gold-500 hover:bg-gold-600 text-white font-sans text-xs font-semibold tracking-widest uppercase px-6 py-2 rounded-sm transition-colors"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Price Table */}
                  <div className="border-t border-gray-100">
                    <table className="w-full text-xs font-sans">
                      <thead className="bg-cream-100">
                        <tr>
                          <th className="text-left px-4 py-2 text-gray-500 font-semibold">Date</th>
                          <th className="text-left px-4 py-2 text-gray-500 font-semibold">Available Rooms</th>
                          <th className="text-left px-4 py-2 text-gray-500 font-semibold">Amount (₹)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 text-gray-600">{checkIn}</td>
                          <td className="px-4 py-2 text-gray-600">{room.available}</td>
                          <td className="px-4 py-2 text-gray-600">{room.price.toFixed(2)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── STEP 4: Complete Booking ── */}
        {step === 4 && selectedRoom && (
          <div className="bg-white rounded-sm shadow-md p-8">
            <button
              onClick={() => setStep(3)}
              className="flex items-center gap-1 text-gold-500 hover:text-gold-600 font-sans text-sm mb-6 transition-colors"
            >
              <ChevronLeft size={16} /> Back
            </button>
            <h2 className="font-serif text-maroon-700 text-2xl font-bold mb-6">
              Complete Your Booking
            </h2>

            {/* Summary */}
            <div className="bg-cream-100 rounded-sm p-5 mb-6">
              <h3 className="font-sans font-semibold text-maroon-700 mb-3">
                Booking Summary
              </h3>
              <div className="space-y-1 font-sans text-sm text-gray-600">
                <p><span className="font-semibold">Room:</span> {selectedRoom.name}</p>
                <p><span className="font-semibold">Check-in:</span> {checkIn}</p>
                <p><span className="font-semibold">Check-out:</span> {checkOut}</p>
                <p><span className="font-semibold">Membership:</span> {isMember ? "Yes" : "No"}</p>
              </div>

              {/* Room Count */}
              <div className="flex items-center justify-between mt-4">
                <span className="font-sans text-sm font-semibold text-gray-600">
                  Number of Rooms
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setRoomCount(Math.max(1, roomCount - 1))}
                    className="w-7 h-7 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center font-bold text-sm transition-colors"
                  >
                    -
                  </button>
                  <span className="font-sans font-semibold w-4 text-center">
                    {roomCount}
                  </span>
                  <button
                    onClick={() =>
                      setRoomCount(Math.min(selectedRoom.available, roomCount + 1))
                    }
                    className="w-7 h-7 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center font-bold text-sm transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price Table */}
              <div className="mt-4 border border-cream-200 rounded-sm overflow-hidden">
                <table className="w-full text-xs font-sans">
                  <thead className="bg-cream-200">
                    <tr>
                      <th className="text-left px-3 py-2 text-gray-500 font-semibold">Date</th>
                      <th className="text-left px-3 py-2 text-gray-500 font-semibold">Rooms</th>
                      <th className="text-left px-3 py-2 text-gray-500 font-semibold">Amount (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-3 py-2 text-gray-600">{checkIn}</td>
                      <td className="px-3 py-2 text-gray-600">{selectedRoom.available}</td>
                      <td className="px-3 py-2 text-gray-600">{selectedRoom.price.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Additional Members */}
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-sans text-sm text-gray-500">
                    Additional Member Charge:{" "}
                    <span className="text-gold-500 font-semibold">₹500 / person / night</span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setAdditionalMembers(Math.max(0, additionalMembers - 1))}
                    className="w-7 h-7 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center font-bold text-sm transition-colors"
                  >
                    -
                  </button>
                  <span className="font-sans font-semibold w-4 text-center">
                    {additionalMembers}
                  </span>
                  <button
                    onClick={() => setAdditionalMembers(additionalMembers + 1)}
                    className="w-7 h-7 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center font-bold text-sm transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <p className="font-serif text-maroon-600 text-2xl font-bold mt-4">
                Total: ₹
                {(
                  total +
                  additionalMembers * 500 * totalNights
                ).toLocaleString()}
              </p>
            </div>

            {/* Guest Form */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-sans text-sm font-medium text-gray-600 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-sm px-4 py-3 font-sans text-sm focus:outline-none focus:border-maroon-500"
                />
              </div>
              <div>
                <label className="block font-sans text-sm font-medium text-gray-600 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 rounded-sm px-4 py-3 font-sans text-sm focus:outline-none focus:border-maroon-500"
                />
              </div>
              <div>
                <label className="block font-sans text-sm font-medium text-gray-600 mb-1">
                  WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="XXXXXXXXXX"
                  value={form.whatsapp}
                  onChange={(e) =>
                    setForm({ ...form, whatsapp: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-sm px-4 py-3 font-sans text-sm focus:outline-none focus:border-maroon-500"
                />
              </div>
              <div>
                <label className="block font-sans text-sm font-medium text-gray-600 mb-1">
                  ID Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={form.idType}
                  onChange={(e) => setForm({ ...form, idType: e.target.value })}
                  className="w-full border border-gray-200 rounded-sm px-4 py-3 font-sans text-sm focus:outline-none focus:border-maroon-500 bg-white"
                >
                  <option>Aadhaar Card</option>
                  <option>PAN Card</option>
                  <option>Passport</option>
                  <option>Driving License</option>
                  <option>Loyalty Card</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block font-sans text-sm font-medium text-gray-600 mb-1">
                ID Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter ID number"
                value={form.idNumber}
                onChange={(e) => setForm({ ...form, idNumber: e.target.value })}
                className="w-full border border-gray-200 rounded-sm px-4 py-3 font-sans text-sm focus:outline-none focus:border-maroon-500"
              />
            </div>

            <div className="mb-6">
              <label className="block font-sans text-sm font-medium text-gray-600 mb-1">
                Special Requests / Description
              </label>
              <textarea
                rows={3}
                placeholder="Any special requests..."
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className="w-full border border-gray-200 rounded-sm px-4 py-3 font-sans text-sm focus:outline-none focus:border-maroon-500 resize-none"
              />
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 mb-6 cursor-pointer">
              <input
                type="checkbox"
                checked={form.agreed}
                onChange={(e) => setForm({ ...form, agreed: e.target.checked })}
                className="mt-0.5 accent-maroon-600"
              />
              <span className="font-sans text-xs text-gray-500 leading-relaxed">
                I agree to the{" "}
                <span className="text-gold-500 underline cursor-pointer">
                  Terms & Conditions
                </span>{" "}
                and understand that this booking is subject to availability
                confirmation. I confirm that all provided information is
                accurate.
              </span>
            </label>

            <button
              onClick={handleSubmit}
              disabled={
                !form.name ||
                !form.email ||
                !form.whatsapp ||
                !form.idNumber ||
                !form.agreed
              }
              className="w-full bg-maroon-600 hover:bg-maroon-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-sans font-semibold text-sm tracking-widest uppercase py-4 rounded-sm transition-colors duration-200"
            >
              {form.agreed
                ? "Confirm Booking"
                : "Please Accept Terms & Conditions"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}