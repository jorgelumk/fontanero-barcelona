import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileFloatingBar } from '@/components/MobileFloatingBar';
import { WhatsAppFloatingButton } from '@/components/WhatsAppFloatingButton';
import { GoogleTagManager } from '@/components/GoogleTagManager';
import { SITE_INFO } from '@/data/content';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.domain),
  title: {
    default: 'Fontaneros Barcelona 24h | Servicio Urgente en 30 Minutos',
    template: '%s | Fontaneros Barcelona 24h',
  },
  description:
    'Fontaneros en Barcelona 24 horas. Reparaciones de urgencia, desatascos, calderas, cambio de bañera por ducha y fugas de agua. Plantilla propia de +10 fontaneros. Llegada en 30 minutos.',
  keywords: [
    'fontanero barcelona',
    'fontaneros barcelona 24h',
    'fontanero urgente barcelona',
    'desatascos barcelona',
    'cambio banera por ducha barcelona',
    'reparacion calderas barcelona',
    'fugas de agua barcelona',
  ],
  alternates: {
    canonical: './',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Fontaneros Barcelona 24h | Servicio Urgente en 30 Minutos',
    description:
      'Servicio profesional de fontanería urgente y reformas en Barcelona y Área Metropolitana. Plantilla propia, atención 24/7 y presupuesto sin compromiso.',
    url: SITE_INFO.domain,
    siteName: SITE_INFO.name,
    locale: 'es_ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'IRRTLmwuVMZV_hSurbs10qOCGFfDh_PundqJD6uS4E0',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased">
        <GoogleTagManager />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileFloatingBar />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
