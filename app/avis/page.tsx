import type { Metadata } from "next";
import { ReviewQr } from "./review-qr";

export const metadata: Metadata = {
  title: "QR avis | Baptiste Lebreton plomberie",
  robots: { index: false, follow: false },
};

export default function Avis() {
  return <main className="qr-page"><div className="shell">
    <p className="eyebrow">Démonstration · usage interne</p>
    <h1>Demander un avis<br/>en un geste.</h1>
    <p className="qr-lead">Touchez le QR pour l'agrandir en plein écran, puis présentez votre téléphone au client. Il scanne avec son appareil photo.</p>
    <ReviewQr/>
    <p className="qr-note">L'écran reste allumé si le navigateur le permet. La luminosité n'est pas réglée par la page.</p>
  </div></main>;
}
