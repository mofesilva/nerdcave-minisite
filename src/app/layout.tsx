import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nerdcave | Links",
  description:
    "Todos os links da Nerdcave em um só lugar. Twitch, Kick, YouTube, Discord e mais.",
  openGraph: {
    title: "Nerdcave | Links",
    description:
      "Todos os links da Nerdcave em um só lugar.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nerdcave | Links",
    description:
      "Todos os links da Nerdcave em um só lugar.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
