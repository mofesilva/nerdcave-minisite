import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nerdcave | Links",
  description:
    "Todos os links da Nerdcave em um só lugar. Twitch, Kick, YouTube, Discord e mais.",
  icons: {
    icon: "/logos/nerdcave_3.2_perfil_green_transparent.png",
    apple: "/logos/nerdcave_3.2_perfil_green_transparent.png",
  },
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
    <html lang="pt-BR" className={outfit.variable}>
      <head>
        <noscript>
          <style>{`[style*="opacity: 0"] { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
      </head>
      <body className="font-sans">
        <div className="flex min-h-svh flex-col">
          <MotionProvider>
            {children}
          </MotionProvider>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
