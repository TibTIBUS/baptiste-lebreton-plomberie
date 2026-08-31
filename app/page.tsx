import {
  ArrowRight,
  Bath,
  Check,
  CheckCircle2,
  Clock3,
  Droplets,
  Euro,
  Flame,
  MapPin,
  MessageSquareText,
  MousePointerClick,
  Navigation,
  Phone,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { BrandLogo } from "./brand-logo";

const business = {
  name: "JONATHY HAUTON",
  formerName: "anciennement LEMAZURIER-NAVARRE",
  city: "Lessay",
  phone: "02 33 46 58 07",
  phoneHref: "+33233465807",
  email: "etf-lemazurier-navarre@orange.fr",
  area: "Lessay et communes voisines",
  address: "442 route de la Zone d’Activités de Gaslonde, 50430 Lessay",
};

const services = [
  {
    icon: Droplets,
    title: "Plomberie & dépannage",
    copy: "Recherche de fuite, robinetterie, canalisations, réparations et interventions de plomberie.",
    search: `plombier ${business.city}`,
  },
  {
    icon: Wrench,
    title: "Sanitaire",
    copy: "Installation et rénovation de douches, baignoires, vasques, WC et équipements sanitaires.",
    search: `sanitaire ${business.city}`,
  },
  {
    icon: Flame,
    title: "Chauffage",
    copy: "Installation, rénovation et entretien de chaudières, chauffe-eau et systèmes de chauffage.",
    search: `chauffagiste ${business.city}`,
  },
  {
    icon: Bath,
    title: "Rénovation énergétique",
    copy: "Des travaux réalisés par un artisan RGE pour améliorer durablement le confort de votre logement.",
    search: `artisan RGE ${business.city}`,
  },
];

const faqs = [
  {
    question: "Dans quelles communes intervenez-vous ?",
    answer: `L’entreprise est basée à ${business.city} et intervient dans les communes voisines. Contactez-nous pour confirmer une intervention à votre adresse.`,
  },
  {
    question: "Pouvez-vous intervenir rapidement en cas de fuite ?",
    answer:
      "Appelez-nous au 02 33 46 58 07 pour décrire la situation et connaître nos possibilités d’intervention.",
  },
  {
    question: "Le devis est-il gratuit ?",
    answer:
      "Contactez-nous pour nous présenter votre projet. Nous pourrons préciser les conditions et organiser une visite si nécessaire.",
  },
  {
    question: "Quels travaux de plomberie réalisez-vous ?",
    answer:
      "Plomberie, sanitaire, chauffage, entretien de chaudières, ramonage et travaux de rénovation énergétique.",
  },
];

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: business.name,
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "442 route de la Zone d’Activités de Gaslonde",
      postalCode: "50430",
      addressLocality: "Lessay",
      addressCountry: "FR",
    },
    areaServed: business.area,
    priceRange: "€€",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="demo-ribbon">
        <span className="demo-dot" aria-hidden="true" />
        <span>Artisan local à Lessay</span>
        <span className="demo-separator" aria-hidden="true" />
        <span className="demo-detail">RGE • Qualibat • Professionnel du Gaz</span>
      </div>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#accueil" aria-label="Retour en haut de page">
            <span className="brand-mark" aria-hidden="true">
              <BrandLogo />
            </span>
            <span>
              <strong>{business.name}</strong>
              <small>{business.formerName}</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navigation principale">
            <a href="#services">Services</a>
            <a href="#entreprise">L’entreprise</a>
            <a href="#qualifications">Qualifications</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="header-call" href={`tel:${business.phoneHref}`}>
            <Phone size={18} aria-hidden="true" />
            <span>
              <small>Appeler maintenant</small>
              <strong>{business.phone}</strong>
            </span>
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-grid" aria-hidden="true" />
          <div className="shell hero-inner">
            <div className="hero-copy">
              <div className="eyebrow">
                <MapPin size={16} aria-hidden="true" />
                Plombier chauffagiste à {business.city}
              </div>

              <h1>
                Plomberie, chauffage
                <span>& sanitaire.</span>
                Votre confort, notre métier.
              </h1>

              <p className="hero-lead">
                JONATHY HAUTON, anciennement LEMAZURIER-NAVARRE, accompagne les particuliers
                pour leurs installations, rénovations, entretiens et dépannages à Lessay et alentour.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href={`tel:${business.phoneHref}`}>
                  <Phone size={19} aria-hidden="true" />
                  Appeler le {business.phone}
                </a>
                <a className="button button-ghost" href="#contact">
                  Demander un devis
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>

              <ul className="hero-benefits" aria-label="Points forts du site">
                <li>
                  <CheckCircle2 size={17} aria-hidden="true" />
                  Artisan RGE & Qualibat
                </li>
                <li>
                  <CheckCircle2 size={17} aria-hidden="true" />
                  Professionnel du Gaz
                </li>
                <li>
                  <CheckCircle2 size={17} aria-hidden="true" />
                  Entreprise locale depuis 1987
                </li>
              </ul>
            </div>

            <div className="hero-visual">
              <div className="hero-emblem" aria-hidden="true">
                <BrandLogo />
              </div>
              <div className="photo-frame">
                <img
                  src="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Plombier installant des raccords de canalisation"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="availability-card">
                  <span className="availability-icon" aria-hidden="true">
                    <Clock3 size={20} />
                  </span>
                  <span>
                    <small>Un besoin, un projet ?</small>
                    <strong>Contactez l’entreprise</strong>
                  </span>
                </div>
              </div>

              <div className="search-card" aria-label="Exemple de résultat Google local">
                <div className="search-label">
                  <Search size={15} aria-hidden="true" />
                  Votre artisan local
                </div>
                <div className="search-field">plombier chauffagiste {business.city.toLowerCase()}</div>
                <div className="search-result">
                  <span className="result-favicon" aria-hidden="true">
                    <Droplets size={15} />
                  </span>
                  <span>
                    <small>Plomberie • Chauffage • Sanitaire</small>
                    <strong>{business.name} — {business.city}</strong>
                    <em>{business.phone}</em>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="conversion-strip" aria-label="Parcours de conversion">
          <div className="shell conversion-grid">
            <div>
              <span>01</span>
              <Search size={21} aria-hidden="true" />
              <p><strong>Entreprise locale</strong> implantée à Lessay depuis 1987.</p>
            </div>
            <div>
              <span>02</span>
              <ShieldCheck size={21} aria-hidden="true" />
              <p><strong>Artisan qualifié</strong> RGE, Qualibat et Professionnel du Gaz.</p>
            </div>
            <div>
              <span>03</span>
              <Phone size={21} aria-hidden="true" />
              <p><strong>Un contact direct</strong> pour vos travaux et dépannages.</p>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="section-kicker">Nos prestations</p>
                <h2>Un interlocuteur local pour le confort de votre logement.</h2>
              </div>
              <p>
                De l’intervention ponctuelle à la rénovation, l’entreprise vous conseille
                et réalise des installations adaptées à votre besoin.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article className="service-card" key={service.title}>
                    <div className="service-card-top">
                      <span className="service-icon" aria-hidden="true">
                        <Icon size={25} strokeWidth={1.8} />
                      </span>
                      <span className="service-number">0{index + 1}</span>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                    <div className="search-intent">
                      <Search size={14} aria-hidden="true" />
                      <span>Recherche ciblée : “{service.search}”</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section visibility-section" id="entreprise">
          <div className="shell visibility-grid">
            <div className="visibility-photo">
              <img
                src="https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Technicien intervenant sur une installation de chauffage"
                loading="lazy"
              />
              <div className="photo-caption">
                <Navigation size={20} aria-hidden="true" />
                <span>
                  <strong>Entreprise basée à Lessay</strong>
                  {business.address}
                </span>
              </div>
            </div>

            <div className="visibility-copy">
              <p className="section-kicker section-kicker-light">Une entreprise de proximité</p>
              <h2>Un savoir-faire local au service de votre confort.</h2>
              <p className="visibility-lead">
                La SARL JONATHY HAUTON, anciennement Société LEMAZURIER-NAVARRE,
                réalise vos travaux de plomberie, chauffage et sanitaire depuis son atelier de Lessay.
              </p>

              <div className="feature-list">
                <div>
                  <span><Search size={20} aria-hidden="true" /></span>
                  <p><strong>Un ancrage historique</strong>Une entreprise créée en 1987 et implantée dans le secteur de Lessay.</p>
                </div>
                <div>
                  <span><MousePointerClick size={20} aria-hidden="true" /></span>
                  <p><strong>Une prise en charge complète</strong>Installation, rénovation, entretien et dépannage.</p>
                </div>
                <div>
                  <span><MessageSquareText size={20} aria-hidden="true" /></span>
                  <p><strong>Des qualifications reconnues</strong>RGE, Qualibat et Professionnel du Gaz.</p>
                </div>
              </div>

              <div className="seo-note">
                <strong>Besoin d’un renseignement ou d’un devis ?</strong>
                <span>Appelez directement l’entreprise au {business.phone}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section revenue-section">
          <div className="shell revenue-layout">
            <div className="revenue-copy">
              <p className="section-kicker">Des travaux durables</p>
              <h2>Des solutions adaptées à votre logement et à vos usages.</h2>
              <p>
                L’entreprise vous accompagne pour entretenir vos équipements, améliorer votre
                confort et mener vos projets de rénovation dans de bonnes conditions.
              </p>

              <div className="revenue-points">
                <div>
                  <span><Euro size={21} aria-hidden="true" /></span>
                  <p><strong>Conseil de proximité</strong>Des solutions cohérentes avec votre besoin et votre logement.</p>
                </div>
                <div>
                  <span><Phone size={21} aria-hidden="true" /></span>
                  <p><strong>Interlocuteur direct</strong>Un échange simple pour expliquer votre projet ou votre panne.</p>
                </div>
                <div>
                  <span><MapPin size={21} aria-hidden="true" /></span>
                  <p><strong>Entreprise implantée à Lessay</strong>Des interventions dans la commune et les secteurs voisins.</p>
                </div>
              </div>
            </div>

            <div className="revenue-visual">
              <div className="revenue-photo-wrap">
                <img
                  src="https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg"
                  alt="Artisan plombier au travail dans une cuisine"
                  loading="lazy"
                />
              </div>
              <div className="metric-card metric-card-top">
                <span>Qualification</span>
                <strong>Artisan RGE</strong>
                <div className="metric-bar"><i /></div>
              </div>
              <div className="metric-card metric-card-bottom">
                <CheckCircle2 size={22} aria-hidden="true" />
                <span><strong>Qualibat</strong> & Professionnel du Gaz</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section reviews-section" id="qualifications">
          <div className="shell">
            <div className="section-heading reviews-heading">
              <div>
                <p className="section-kicker">Qualifications</p>
                <h2>Des repères clairs pour confier vos travaux sereinement.</h2>
              </div>
              <p className="qualification-intro">Des certifications qui attestent du savoir-faire de l’entreprise et de son engagement pour des installations conformes et performantes.</p>
            </div>

            <div className="testimonials-grid qualification-grid">
              <article className="testimonial-card qualification-card"><ShieldCheck size={28} /><h3>RGE</h3><p>Reconnu Garant de l’Environnement pour vos travaux de rénovation énergétique éligibles.</p></article>
              <article className="testimonial-card qualification-card"><CheckCircle2 size={28} /><h3>Qualibat</h3><p>Une qualification professionnelle reconnue dans le secteur du bâtiment.</p></article>
              <article className="testimonial-card qualification-card"><Flame size={28} /><h3>Professionnel du Gaz</h3><p>Une expertise dédiée à la sécurité et à la conformité des installations gaz.</p></article>
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="shell faq-layout">
            <div className="faq-intro">
              <p className="section-kicker">Questions fréquentes</p>
              <h2>Les réponses utiles avant de nous appeler.</h2>
              <p>
                Retrouvez les premières informations sur les interventions,
                les devis et les prestations proposées.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>
                    {faq.question}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="shell contact-card">
            <div className="contact-copy">
              <p className="section-kicker section-kicker-light">Nous contacter</p>
              <h2>Parlons de votre besoin ou de votre projet.</h2>
              <p>
                Pour un dépannage, une installation, un entretien ou une rénovation,
                contactez directement l’entreprise JONATHY HAUTON à Lessay.
              </p>
              <div className="contact-checks">
                <span><Check size={16} aria-hidden="true" /> Plomberie</span>
                <span><Check size={16} aria-hidden="true" /> Chauffage</span>
                <span><Check size={16} aria-hidden="true" /> Sanitaire</span>
                <span><Check size={16} aria-hidden="true" /> Rénovation énergétique</span>
              </div>
            </div>

            <div className="contact-actions-card">
              <span className="contact-card-label">Coordonnées</span>
              <a className="contact-phone" href={`tel:${business.phoneHref}`}>
                <span aria-hidden="true"><Phone size={24} /></span>
                <span><small>Appeler JONATHY HAUTON</small><strong>{business.phone}</strong></span>
              </a>
              <a className="button button-primary button-full" href={`mailto:${business.email}?subject=Demande%20de%20devis`}>
                Demander un devis par e-mail
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <p><MapPin size={15} aria-hidden="true" /> {business.address}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer-top">
          <div className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true"><BrandLogo /></span>
            <span><strong>{business.name}</strong><small>{business.formerName}</small></span>
          </div>
          <p>
            Plomberie, chauffage et sanitaire à Lessay. Artisan RGE, Qualibat
            et Professionnel du Gaz.
          </p>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#entreprise">L’entreprise</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 SARL {business.name} — SIREN 341 877 884</span>
          <span>
            Photos libres : <a href="https://www.pexels.com/photo/plumber-installs-pipe-fittings-6419128/" target="_blank" rel="noreferrer">Pexels</a> & <a href="https://pixabay.com/photos/plumber-handyman-repair-worker-228010/" target="_blank" rel="noreferrer">Pixabay</a>
          </span>
          <span>RCS Coutances • APE 4322A</span>
        </div>
      </footer>

      <div className="mobile-contact-bar" aria-label="Actions de contact rapides">
        <a href={`tel:${business.phoneHref}`}>
          <Phone size={18} aria-hidden="true" />
          Appeler
        </a>
        <a href="#contact">
          Demander un devis
          <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
    </>
  );
}
