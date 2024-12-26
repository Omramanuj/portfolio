import {JetBrains_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: {
    default: 'Om Ramanuj - Developer Portfolio',
    template: '%s | Om Ramanuj',
  },
  icons: {
    icon: "/worker.png",
  },
  description: 'Portfolio of Om Ramanuj, showcasing projects and experience.',
  openGraph: {
    title: 'Om Ramanuj Portfolio',
    description: 'Showcasing my professional experience projects and skills.',
    url: 'https://omramanuj.vercel.app',
    siteName: 'Om Ramanuj Portfolio',
    images: [
      {
        url: 'https://omramanuj.vercel.app/worker.png',
        width: 800,
        height: 600,
        alt: 'Om Ramanuj',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@OmRamanuj',
  },
};

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={jetbrainsMono.variable}
      >
        <Header/>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
