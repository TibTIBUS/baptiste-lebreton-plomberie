"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Mail, X } from "lucide-react";

const DISMISS_KEY = "jonathy-demo-notice-dismissed";
const DELAY_MS = 12_000;
const SCROLL_RATIO = 0.4;

const outreach = {
  contactName: "Thibaut",
  email: "gestion.localia@gmail.com",
  offersUrl: "https://localiapro.fr/",
};

/**
 * Bandeau adressé au prospect (Jonathy), pas à ses futurs clients : ce site
 * est une démonstration temporaire, pas la version définitive. N'apparaît
 * qu'en mode démo (GITHUB_PAGES) et jamais sur le déploiement de production.
 *
 * Volontairement discret et différé — pas de compte à rebours ni de blocage
 * de la page à l'arrivée : on laisse d'abord le visiteur découvrir le site.
 *
 * L'élément est présent dans le DOM dès le chargement (invisible) ; le
 * scroll et le minuteur ne font ensuite que basculer la classe
 * `.is-visible`. L'insérer en `position: fixed` en pleine gestuelle tactile
 * (au moment précis où le seuil de scroll est franchi) fait "rebondir"
 * Safari sur mobile — la page semble revenir en arrière toute seule.
 */
export function DemoNotice({ isDemo }: { isDemo: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isDemo) return;

    let dismissed = false;
    try {
      dismissed = localStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      // Stockage indisponible (navigation privée, etc.) : on affiche quand même.
    }
    if (dismissed) return;

    let shown = false;
    let ticking = false;
    const show = () => {
      if (shown) return;
      shown = true;
      setVisible(true);
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const ratio = scrollTop / (scrollHeight - clientHeight || 1);
        if (ratio >= SCROLL_RATIO) show();
      });
    };

    const timer = setTimeout(show, DELAY_MS);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isDemo]);

  if (!isDemo) return null;

  const subject = encodeURIComponent("JONATHY HAUTON — le site vous plaît ?");

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Rien à faire si le stockage est bloqué : la bannière reviendra au
      // prochain chargement, sans conséquence.
    }
  };

  return (
    <div
      className={`demo-notice${visible ? " is-visible" : ""}`}
      role="dialog"
      aria-label="À propos de cette démonstration"
      aria-hidden={!visible}
    >
      <button className="demo-notice-close" onClick={dismiss} aria-label="Fermer ce message">
        <X size={16} />
      </button>
      <p className="demo-notice-title">👋 Bonjour Jonathy,</p>
      <p className="demo-notice-body">
        Ce site a été conçu à titre de démonstration, spécialement pour JONATHY HAUTON. Il n’a pas
        vocation à rester en ligne sous cette forme — dites-moi si vous souhaitez qu’on le mette en
        place pour de bon, avec votre propre nom de domaine.
      </p>
      <div className="demo-notice-actions">
        <a className="button button-primary" href={`mailto:${outreach.email}?subject=${subject}`}>
          <Mail size={17} aria-hidden="true" />
          Écrire à {outreach.contactName}
        </a>
      </div>
      <a className="demo-notice-offers" href={outreach.offersUrl} target="_blank" rel="noreferrer">
        Découvrir les offres Localia
        <ArrowRight size={14} aria-hidden="true" />
      </a>
    </div>
  );
}
