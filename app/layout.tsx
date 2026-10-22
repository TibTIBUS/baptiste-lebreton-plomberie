import type { Metadata } from "next";
import { StickyBarVisibility } from "./sticky-bar";
import "./globals.css";
const base = process.env.GITHUB_PAGES === "true" ? "/baptiste-lebreton-plomberie" : "";
export const metadata: Metadata = {
 title: "Baptiste Lebreton plomberie | Proposition de site à Créances",
 description: "Maquette de démonstration pour la SARL Lebreton Baptiste à Créances : plomberie, chauffage, climatisation et salles de bains. Proposition non officielle.",
 robots: {index:false,follow:false},
 icons: {icon:`${base}/favicon.svg`},
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="fr"><body>{children}<StickyBarVisibility/></body></html>;}
