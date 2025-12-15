// src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google'; // 1. IMPORT the font module
import Navbar from '@/components/Navbar'; 

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
        {children}
      </body>
    </html>
  );
}