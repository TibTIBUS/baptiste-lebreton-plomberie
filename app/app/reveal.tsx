"use client";
import { useEffect, useRef } from "react";
export function Reveal({ children }: { children: React.ReactNode }) {
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{const el=ref.current;if(!el||matchMedia('(prefers-reduced-motion: reduce)').matches)return;el.classList.add('reveal-ready');const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){el.classList.add('revealed');observer.unobserve(el);}},{threshold:0.08});observer.observe(el);return()=>observer.disconnect();},[]);
 return <div ref={ref}>{children}</div>;
}
