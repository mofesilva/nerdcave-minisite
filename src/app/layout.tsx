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
    <html lang="pt-BR" className={`${outfit.variable} h-full overflow-hidden antialiased`}>
      <head>
        <noscript>
          <style>{`[style*="opacity: 0"] { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
      </head>
      <body className="h-full overflow-hidden font-sans">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/nerdcave-wallpaper-purple-1920x1080.jpg')" }} aria-hidden="true" />
        <div className="relative h-full overflow-y-auto flex flex-col">
          <MotionProvider>
            {children}
          </MotionProvider>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
