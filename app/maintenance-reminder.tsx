"use client";

import { useState } from "react";
import { CalendarPlus } from "lucide-react";

const equipments = ["Chaudière", "Pompe à chaleur", "Climatisation", "Autre équipement"];
const fmt = (d: Date) => d.toISOString().slice(0, 10).replace(/-/g, "");
const plusMonths = (n: number) => { const d = new Date(); d.setMonth(d.getMonth() + n); return d.toISOString().slice(0, 10); };

export function MaintenanceReminder({ phone, email }: { phone: string; email: string }) {
  const [equipment, setEquipment] = useState(equipments[0]);
  const [date, setDate] = useState("");
  const [done, setDone] = useState(false);

  function download() {
    if (!date) return;
    const start = new Date(date + "T09:00:00");
    const end = new Date(start.getTime() + 3600000);
    const day = date.replace(/-/g, "");
    const next = new Date(date + "T12:00:00"); next.setDate(next.getDate() + 1);
    const ics = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Rappel entretien//FR", "BEGIN:VEVENT",
      `UID:${Date.now()}@rappel-entretien`, `DTSTAMP:${fmt(new Date())}T000000Z`,
      `DTSTART;VALUE=DATE:${day}`, `DTEND;VALUE=DATE:${fmt(next)}`,
      `SUMMARY:Entretien à planifier : ${equipment}`,
      `DESCRIPTION:Rappel créé par vous. Pour demander un rendez-vous : ${phone} ou ${email}.`,
      "END:VEVENT", "END:VCALENDAR",
    ].join("\r\n");
    void start; void end;
    const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url; a.download = "rappel-entretien.ics"; a.click();
    URL.revokeObjectURL(url);
    setDone(true);
  }

  return <div className="reminder-card">
    <p className="panel-kicker">Rappel facultatif</p>
    <h3>Un rappel dans votre agenda.</h3>
    <fieldset className="reminder-eq"><legend>Votre équipement</legend>
      {equipments.map(e => <label key={e} className={e === equipment ? "on" : ""}><input type="radio" name="eq" checked={e === equipment} onChange={() => { setEquipment(e); setDone(false); }}/>{e}</label>)}
    </fieldset>
    <div className="form-field"><label htmlFor="reminder-date">Date de votre rappel</label>
      <input id="reminder-date" type="date" value={date} min={new Date().toISOString().slice(0, 10)} onChange={e => { setDate(e.target.value); setDone(false); }}/>
      <div className="reminder-quick"><span>Repères, à vous de choisir :</span>
        <button type="button" onClick={() => { setDate(plusMonths(6)); setDone(false); }}>Dans 6 mois</button>
        <button type="button" onClick={() => { setDate(plusMonths(12)); setDone(false); }}>Dans 12 mois</button></div>
    </div>
    <button type="button" className="reminder-btn" disabled={!date} onClick={download}><CalendarPlus size={18}/>Ajouter à mon agenda</button>
    {done && <p className="reminder-ok" role="status">Fichier de rappel téléchargé. Ouvrez-le pour l'ajouter à votre agenda.</p>}
    <p className="reminder-note">Le fichier est créé sur votre appareil. Rien n'est envoyé à l'entreprise ni enregistré. Pour fixer un entretien, appelez le {phone}.</p>
  </div>;
}
