import type { Metadata } from "next";

import { DemoNotice } from "./demo-notice";
import { ScrollToTop } from "./scroll-to-top";
import { StickyBarVisibility } from "./sticky-bar";
import "./globals.css";

const isDemo = process.env.GITHUB_PAGES === "true";
const basePath = isDemo ? "/jonathy-hauton-plomberie" : "";

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
  // La démonstration temporaire ne doit pas être indexée : elle ferait
  // doublon avec le futur site de l'entreprise sur son propre domaine.
  robots: {
    index: !isDemo,
    follow: !isDemo,
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
        <ScrollToTop />
        <StickyBarVisibility />
        <DemoNotice isDemo={isDemo} />
      </body>
    </html>
  );
}
