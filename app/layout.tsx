import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JONATHY HAUTON | Plombier chauffagiste à Lessay",
  description:
    "JONATHY HAUTON, anciennement LEMAZURIER-NAVARRE : plomberie, chauffage, sanitaire et rénovation énergétique à Lessay. Artisan RGE, Qualibat et Professionnel du Gaz.",
  keywords: [
    "plombier Lessay",
    "chauffagiste Lessay",
    "JONATHY HAUTON",
    "LEMAZURIER-NAVARRE",
    "artisan RGE Manche",
    "plomberie sanitaire Lessay",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
