import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import LenisProvider from "@/components/common/LenisProvider";
import TopMenu from "@/components/common/TopMenu";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shradda & Rahul",
  description: "Created By Zerror Studios !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <LenisProvider>
          {children}
          {/* <Navbar /> */}
          <TopMenu />
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
