import type { MetadataRoute } from "next";

// Démonstration temporaire sur GitHub Pages : à ne pas indexer, pour ne pas
// faire doublon avec le futur site de l'entreprise sur son propre domaine.
const isDemo = process.env.GITHUB_PAGES === "true";

// Requis par `output: "export"` : sans cette annotation, Next.js refuse de
// prérendre une route qui lit une variable d'environnement.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  if (isDemo) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return { rules: { userAgent: "*", allow: "/" } };
}
