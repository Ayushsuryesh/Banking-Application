import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter",subsets: ["latin"],});
const ibmplexsherif = IBM_Plex_Serif({ variable: "--font-ibm-plex-serif",subsets: ["latin"], weight: ["400","700"] });

export const metadata: Metadata = {
  title: "Horizon",
  description: "A simple & flexible banking application",
  icons: {
    icon: "/icons/logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmplexsherif.variable}.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
