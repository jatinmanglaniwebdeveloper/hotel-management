import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agra Heritage Hotel | Royal Stay Near Taj Mahal",
  description: "Experience royal hospitality near the Taj Mahal, Agra.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FDFAF4] text-gray-800 antialiased w-full overflow-x-hidden" style={{ fontFamily: 'Jost, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}