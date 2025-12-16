// src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google'; // 1. IMPORT the font module
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; // Import the Footer component
// Import Swiper styles (Crucial!)
import 'swiper/css';
import 'swiper/css/pagination';

// 2. DEFINE the font variable using the Inter constructor
const inter = Inter({ subsets: ['latin'] }); 

export const metadata = {
  title: 'Your Interactive Portfolio',
  description: 'Built with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main> {/* Ensure the page content is wrapped by <main> */}
        <Footer /> {/* Add Footer here */}
      </body>
    </html>
  );
}