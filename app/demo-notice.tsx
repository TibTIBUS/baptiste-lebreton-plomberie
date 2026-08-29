"use client";

import { ArrowRight, Mail, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const DISMISS_KEY = "jonathy-demo-notice-dismissed";
const DELAY_MS = 4_500;

const outreach = {
  contactName: "Thibaut",
  email: "gestion.localia@gmail.com",
  offersUrl: "https://localiapro.fr/",
};

export function DemoNotice({ isDemo }: { isDemo: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isDemo) return;

    try {
      if (localStorage.getItem(DISMISS_KEY) === "1") return;
    } catch {
      // Si le stockage est indisponible, le message reste affichable.
    }

    const timer = window.setTimeout(() => setVisible(true), DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [isDemo]);

  const dismiss = useCallback(() => {
    setVisible(false);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Le stockage bloqué n’empêche pas la fermeture de la fenêtre.
    }
  }, []);

  useEffect(() => {
    if (!visible) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [dismiss, visible]);

  if (!isDemo) return null;

  const subject = encodeURIComponent("JONATHY HAUTON — le site vous plaît ?");

  return (
    <div
      className={`demo-notice-backdrop${visible ? " is-visible" : ""}`}
      aria-hidden={!visible}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) dismiss();
      }}
    >
      <section
        className="demo-notice"
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-notice-title"
      >
        <button className="demo-notice-close" onClick={dismiss} aria-label="Fermer ce message">
          <X size={21} aria-hidden="true" />
        </button>

        <span className="demo-notice-label">Une maquette créée pour vous</span>
        <h2 className="demo-notice-title" id="demo-notice-title">👋 Bonjour Jonathy,</h2>
        <p className="demo-notice-body">
          Ce site a été conçu à titre de démonstration, spécialement pour la SARL
          JONATHY HAUTON. Il n’a pas vocation à rester en ligne sous cette forme —
          dites-moi si vous souhaitez qu’on le mette en place pour de bon, avec
          votre propre nom de domaine, par exemple <strong>jonathy-hauton.fr</strong>.
        </p>

        <div className="demo-notice-actions">
          <a className="button button-primary" href={`mailto:${outreach.email}?subject=${subject}`}>
            <Mail size={18} aria-hidden="true" />
            Écrire à {outreach.contactName}
          </a>
          <a className="button demo-notice-offers" href={outreach.offersUrl} target="_blank" rel="noreferrer">
            Découvrir les offres Localia
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
