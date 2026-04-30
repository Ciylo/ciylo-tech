import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DecorativeImage from "@/components/layout/DecorativeImage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Ciylo: Turning Your Ideas Into Scalable Digital Products – Web, Mobile & User-Centered Software Solutions",
  description:
    "Ciylo Pvt. Ltd. is a software company specializing in turning innovative ideas into powerful digital solutions. We help businesses streamline operations and solve complex challenges with custom-built software and AI-powered solutions. Our tailored approach ensures that each project, from engaging web and mobile apps to robust enterprise systems, is designed to help organizations scale with confidence",
  icons: {
    icon: "/images/ciylo-titleLogo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex relative min-h-screen overflow-hidden w-full flex-col">
          <Header />
          <main className="flex-1 md:pt-24 overflow-x-hidden w-full pt-18">
            {children}
          </main>
          <Footer />
          <DecorativeImage hiddenPaths={["/industries/details"]} />
        </div>
      </body>
    </html>
  );
}
