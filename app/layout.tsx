import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PWAUpdatePrompt from "@/components/PWAUpdatePrompt";
import OrientationLock from "@/components/OrientationLock";

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BioAula3D — Biología Interactiva",
  description: "Explorá células, ADN, neuronas y el cuerpo humano en 3D. App educativa de biología para primaria y secundaria.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "BioAula3D",
    startupImage: "/icon-512-v2.png",
  },
  icons: {
    icon: [
      { url: "/icon-192-v2.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512-v2.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icon-192-v2.png", sizes: "192x192", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#111214",
  // Forzar redetección en PWA instaladas
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://sketchfab.com" />
        <link rel="preconnect" href="https://media.sketchfab.com" crossOrigin="" />
        <link rel="preconnect" href="https://static.sketchfab.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://sketchfab.com" />
        <link rel="dns-prefetch" href="https://media.sketchfab.com" />
        <link rel="dns-prefetch" href="https://static.sketchfab.com" />
      </head>
      <body className="text-[#E8EAF0] min-h-screen" style={{ background: "#17191C" }}>
        <Navbar />
        <OrientationLock />
        <main>{children}</main>
        <PWAUpdatePrompt />
      </body>
    </html>
  );
}
