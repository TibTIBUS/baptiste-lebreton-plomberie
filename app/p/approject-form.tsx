"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Info } from "lucide-react";

export function ProjectForm() {
  const form = useRef<HTMLFormElement>(null);
  const [ready, setReady] = useState(false);
  const [tested, setTested] = useState(false);
  useEffect(() => setReady(true), []);

  return <div className="project-form-card">
    <p className="panel-kicker">Votre projet, en quelques mots</p>
    <h3>Décrivez votre besoin.</h3>
    <div className="form-demo-note" id="form-demo-note"><Info size={18}/><p><strong>Formulaire de démonstration</strong>Utilisez des informations fictives pour le tester. Rien n'est envoyé ni enregistré.</p></div>
    <form ref={form} aria-label="Décrire un projet, démonstration" aria-describedby="form-demo-note" onChange={() => setTested(false)} onSubmit={event => {
      event.preventDefault();
      setTested(true);
    }}>
      <div className="form-row">
        <div className="form-field"><label htmlFor="project-phone">Téléphone <span aria-hidden="true">*</span></label><input id="project-phone" type="tel" autoComplete="off" inputMode="tel" placeholder="Ex. : 06 00 00 00 00" required maxLength={25} onInput={event => {
          const input = event.currentTarget;
          const digits = input.value.replace(/\D/g, "");
          input.setCustomValidity(digits.length >= 8 && digits.length <= 15 && /^[+\d\s().-]+$/.test(input.value) ? "" : "Saisissez un numéro de téléphone valide (8 à 15 chiffres).");
        }}/></div>
        <div className="form-field"><label htmlFor="project-email">E-mail <small>facultatif</small></label><input id="project-email" type="email" autoComplete="off" placeholder="Ex. : vous@exemple.fr" maxLength={254}/></div>
      </div>
      <div className="form-field"><label htmlFor="project-subject">Sujet <span aria-hidden="true">*</span></label><select id="project-subject" required defaultValue=""><option value="" disabled>Choisissez le type de projet</option><option>Plomberie</option><option>Chauffage / climatisation</option><option>Salle de bains</option><option>Entretien / dépannage</option><option>Autre demande</option></select></div>
      <div className="form-field"><label htmlFor="project-description">Description du projet <span aria-hidden="true">*</span></label><textarea id="project-description" required minLength={10} maxLength={3000} rows={5} placeholder="Votre besoin, votre commune, les équipements concernés, le délai souhaité…"/></div>
      <p className="form-required">* Champs obligatoires. L'e-mail reste facultatif.</p>
      <button className="button primary form-submit" type="submit" disabled={!ready}>Tester le formulaire <ArrowRight size={17}/></button>
      <noscript><p className="form-feedback">Activez JavaScript pour tester cet aperçu. Aucun envoi n'est disponible.</p></noscript>
      <div role="status" aria-live="polite" className={tested ? "form-feedback visible" : "form-feedback"}>{tested && <><Check size={18}/><p><strong>Le formulaire est bien rempli.</strong>Test terminé : aucune demande n'a été envoyée à l'entreprise et aucune information n'a été enregistrée.</p></>}</div>
    </form>
  </div>;
          }
