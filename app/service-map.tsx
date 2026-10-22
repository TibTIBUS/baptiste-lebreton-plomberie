"use client";

import { useEffect, useRef, useState } from "react";
import type { Map as LeafletMap } from "leaflet";
import type { GeoJsonObject } from "geojson";
import serviceZone from "./service-zone.json";

const center: [number, number] = [49.2013693, -1.5661157];
export function ServiceMap() {
  const container = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const resetRef = useRef<(() => void) | null>(null);
  const [state, setState] = useState("waiting");
  useEffect(() => {
    const element = container.current;
    if (!element) return;
    let cancelled = false;
    let resize: ResizeObserver | undefined;
    const visibility = new IntersectionObserver(async ([entry]) => {
      if (!entry.isIntersecting || mapRef.current) return;
      visibility.disconnect();
      setState("loading");
      try {
        const L = await import("leaflet");
        if (cancelled) return;
        const map = L.map(element, {zoomAnimation:false,fadeAnimation:false,markerZoomAnimation:false,scrollWheelZoom:false, dragging:false, touchZoom:false, doubleClickZoom:false, boxZoom:false, zoomSnap:.25, minZoom:7, maxZoom:13, attributionControl:false}).setView(center,9);
        mapRef.current = map;
        const circle = L.geoJSON(serviceZone as GeoJsonObject, {style:{color:"#a4772d",weight:2,dashArray:"7 6",fillColor:"#c8a15a",fillOpacity:.17},interactive:false}).addTo(map);
        L.circleMarker(center, {radius:7,color:"#fff",weight:3,fillColor:"#8e6426",fillOpacity:1,interactive:false}).addTo(map).bindTooltip("Créances", {permanent:true,direction:"top",offset:[0,-10],className:"creances-label"}).openTooltip();
        L.control.scale({imperial:false,position:"bottomleft"}).addTo(map);
        const reset = () => { map.invalidateSize(); map.fitBounds(circle.getBounds(), {padding:[26,38],animate:false}); };
        resetRef.current = reset;
        reset();
        const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {maxZoom:19,referrerPolicy:"strict-origin-when-cross-origin"});
        tiles.on("load", () => !cancelled && setState("ready"));
        tiles.on("tileerror", () => !cancelled && setState("error"));
        tiles.addTo(map);
        resize = new ResizeObserver(reset);resize.observe(element);
      } catch {if(!cancelled)setState("error");}
    }, {threshold:.01});
    visibility.observe(element);
    return () => {cancelled=true;visibility.disconnect();resize?.disconnect();mapRef.current?.remove();mapRef.current=null;};
  }, []);
  return <figure className="service-map-card">
    <div className="service-map-heading"><div><strong>Autour de Créances</strong><span>Rayon indicatif de 30 km</span></div><button type="button" onClick={()=>resetRef.current?.()}>Recentrer</button></div>
    <div ref={container} className="service-map" role="region" aria-label="Carte de la Manche centrée sur Créances, avec un cercle indicatif de 30 kilomètres" data-map-state={state}/>
    {(state === "loading" || state === "waiting") && <p className="map-loading">Chargement de la carte…</p>}
    {state === "error" && <p className="map-error">Le fond de carte n'a pas pu se charger. Réessayez avec une connexion Internet.</p>}
    <figcaption className="map-caption"><span><i/>Environ 30 km, uniquement côté terre.</span><p>Il ne représente ni une limite administrative ni une garantie d'intervention. Votre commune reste à confirmer avec l'entreprise. Contour littoral simplifié.</p><a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">© OpenStreetMap contributors · ODbL</a><a href="https://github.com/gregoiredavid/france-geojson" target="_blank" rel="noreferrer">Littoral : IGN 2018 · Licence Ouverte</a></figcaption>
  </figure>;
}
