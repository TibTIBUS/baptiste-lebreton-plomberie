"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { Maximize2, X } from "lucide-react";

// Lien d'avis Google de l'entreprise : à renseigner une fois obtenu. Vide = QR d'exemple, jamais un faux lien.
const REVIEW_URL = "";
const SAMPLE = "EXEMPLE - le vrai lien d'avis sera ajouté ici";

export function ReviewQr() {
  const [svg, setSvg] = useState("");
  const [full, setFull] = useState(false);
  const isSample = !REVIEW_URL;
  useEffect(() => {
    QRCode.toString(REVIEW_URL || SAMPLE, { type: "svg", margin: 2, errorCorrectionLevel: "M", color: { dark: "#000000", light: "#ffffff" } }).then(setSvg);
  }, []);
  useEffect(() => {
    if (!full) return;
    let lock: { release: () => Promise<void> } | null = null;
    // Garde l'écran allumé si le navigateur le permet. Ne règle pas la luminosité.
    const nav = navigator as Navigator & { wakeLock?: { request: (t: "screen") => Promise<{ release: () => Promise<void> }> } };
    nav.wakeLock?.request("screen").then(l => { lock = l; }).catch(() => {});
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setFull(false); };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); lock?.release().catch(() => {}); };
  }, [full]);

  return <>
    <button type="button" className="qr-mini" onClick={() => setFull(true)} aria-label="Agrandir le QR code en plein écran">
      <span className="qr-mini-img" dangerouslySetInnerHTML={{ __html: svg }}/>
      <span className="qr-mini-label"><Maximize2 size={16}/>Toucher pour agrandir</span>
    </button>
    {isSample && <p className="qr-sample-note"><strong>Exemple.</strong> Ce QR ne mène à aucune fiche d'avis. Le vrai QR sera créé avec le lien Google de l'entreprise.</p>}
    {full && <div className="qr-full" role="dialog" aria-modal="true" aria-label="QR code d'avis en plein écran">
      <button type="button" className="qr-close" onClick={() => setFull(false)}><X size={20}/>Fermer</button>
      <h2>Votre avis compte</h2>
      <p>Scannez avec l'appareil photo de votre téléphone</p>
      <div className="qr-full-img" dangerouslySetInnerHTML={{ __html: svg }}/>
      {isSample && <span className="qr-badge">EXEMPLE</span>}
      <p className="qr-thanks">Merci de votre confiance</p>
    </div>}
  </>;
}
