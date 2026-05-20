import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Clover,
  Diamond,
  Handshake,
  HeartHandshake,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  UserCheck,
  Menu,
  X,
  Crown,
  Building2,
  BadgeCheck,
} from "lucide-react";

const logoUrl = "/logo.png";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Gastronomie", href: "#gastronomie" },
  { label: "Spielerschutz", href: "#spielerschutz" },
  { label: "Standorte", href: "#standorte" },
  { label: "Kontakt", href: "#kontakt" },
];

const locations = [
  {
    city: "Baumholder",
    address: "Aulenbacher Straße 2, 55774 Baumholder",
  },
  {
    city: "Montabaur",
    address: "Alleestraße 35, 56410 Montabaur",
  },
];

const highlights = [
  {
    icon: <Diamond className="text-amber-300" size={34} />,
    title: "Modern & stilvoll",
    text: "Gepflegte Spielhallen mit hochwertiger Atmosphäre und moderner Ausstattung.",
  },
  {
    icon: <Clover className="text-amber-300" size={34} />,
    title: "Unterhaltung",
    text: "Ein angenehmes Spielerlebnis für erwachsene Gäste ab 18 Jahren.",
  },
  {
    icon: <ShieldCheck className="text-amber-300" size={34} />,
    title: "Fair & sicher",
    text: "Verantwortungsvolles Spiel, Jugendschutz und klare Regeln stehen im Mittelpunkt.",
  },
  {
    icon: <Star className="text-amber-300" size={34} />,
    title: "Für unsere Gäste",
    text: "Freundlicher Service, angenehme Räume und ein seriöses Umfeld.",
  },
];

const protection = [
  "Zutritt und Spielteilnahme ausschließlich ab 18 Jahren",
  "Verantwortungsvolles Spielen und regelmäßige Pausen",
  "Ansprechpartner bei Fragen zum Spielerschutz vor Ort",
  "Einhaltung gesetzlicher Vorgaben und Kontrollpflichten",
];

const partnerBenefits = [
  "Aufstellung in Bars, Kneipen und Gastronomiebetrieben",
  "Automatenaufsteller für Hessen und Rheinland-Pfalz",
  "Persönliche Betreuung und klare Absprachen",
  "Seriöser Betrieb innerhalb gesetzlicher Vorgaben",
  "Direkter Ansprechpartner für Ihre Anliegen",
];

const premiumCard =
  "rounded-[2rem] border border-amber-400/15 bg-gradient-to-br from-white/[0.08] via-white/[0.035] to-amber-950/10 shadow-2xl shadow-black/40";

export default function Website() {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  React.useEffect(() => {
    document.title = "Spielhalle Vegas | PG Pro Games GmbH";

    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta(
      "description",
      "Spielhalle Vegas von PG Pro Games GmbH: Moderne Spielhallen in Baumholder und Montabaur sowie professionelle Automatenaufstellung für Gastronomien in Rheinland-Pfalz und Hessen."
    );
    setMeta(
      "keywords",
      "Spielhalle Vegas, PG Pro Games GmbH, Spielhalle Baumholder, Spielhalle Montabaur, Spielothek Baumholder, Spielothek Montabaur, Automatenaufstellung Gastronomie, Automatenaufsteller Hessen, Automatenaufsteller Frankfurt, Automatenaufsteller Rheinland-Pfalz, Automatenaufsteller Rheinland Pfalz, Geldspielgeräte Gastronomie, Automatenaufstellung Bars, Automatenaufstellung Kneipen"
    );
    setMeta("robots", "index, follow");
    setMeta("theme-color", "#050505");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://pgprogames.de/");

    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.setAttribute("rel", "icon");
      document.head.appendChild(favicon);
    }
    favicon.setAttribute("href", "/logo.png");
    favicon.setAttribute("type", "image/png");
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050403] text-white selection:bg-amber-300 selection:text-black">
      <header className="sticky top-0 z-50 border-b border-amber-400/10 bg-[#050403]/90 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3" aria-label="PG Pro Games Startseite">
            <img
              src={logoUrl}
              alt="PG Pro Games GmbH Logo"
              className="h-11 w-11 rounded-xl object-contain ring-1 ring-amber-300/15"
            />
            <div className="hidden sm:block">
              <div className="text-sm font-black tracking-[0.24em] text-white">PG PRO GAMES</div>
              <div className="text-[11px] tracking-[0.32em] text-amber-300/80">SPIELHALLE VEGAS</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-xs font-bold uppercase tracking-wide text-zinc-300 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-amber-300">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#kontakt"
            className="hidden rounded-xl bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 px-5 py-3 text-xs font-black uppercase tracking-wide text-black shadow-lg shadow-amber-500/20 transition hover:scale-[1.03] md:inline-flex"
          >
            Kontakt
          </a>

          <button
            onClick={() => setMobileMenu((value) => !value)}
            className="flex items-center justify-center rounded-xl border border-amber-300/20 bg-white/5 p-3 text-white lg:hidden"
            aria-label={mobileMenu ? "Menü schließen" : "Menü öffnen"}
          >
            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileMenu && (
          <div className="border-t border-amber-400/10 bg-[#050403]/95 px-6 py-5 lg:hidden">
            <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-wide text-zinc-300">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className="transition hover:text-amber-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative overflow-hidden border-b border-amber-400/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.20),transparent_32%),radial-gradient(circle_at_15%_35%,rgba(185,28,28,0.22),transparent_28%),radial-gradient(circle_at_88%_42%,rgba(251,191,36,0.14),transparent_28%),linear-gradient(135deg,#050403_0%,#150f0a_48%,#030202_100%)]" />
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(251,191,36,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,.08)_1px,transparent_1px)] [background-size:58px_58px]" />
        <div className="absolute -left-24 top-36 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute -right-24 bottom-12 h-96 w-96 rounded-full bg-red-900/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div {...fadeUp} className="mx-auto max-w-5xl text-center">
            <div className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-[2rem] border border-amber-300/20 bg-black/45 p-3 shadow-2xl shadow-amber-500/10 backdrop-blur">
              <img src={logoUrl} alt="PG Pro Games GmbH Logo" className="h-full w-full object-contain" />
            </div>

            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-black/40 px-5 py-2 text-sm font-semibold text-amber-100 backdrop-blur">
              <Crown size={16} className="text-amber-300" /> Spielhalle Vegas by PG Pro Games GmbH
            </p>

            <h1 className="text-5xl font-black leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
              Premium Spielunterhaltung in
              <span className="block bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-700 bg-clip-text text-transparent">
                stilvollem Ambiente.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
              Moderne Spielhallen in Baumholder und Montabaur — gepflegt, verantwortungsbewusst und mit persönlichem Service für erwachsene Gäste.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-bold uppercase tracking-wide text-zinc-300">
              <span className="rounded-full border border-amber-300/15 bg-black/35 px-4 py-2">Zutritt ab 18 Jahren</span>
              <span className="rounded-full border border-amber-300/15 bg-black/35 px-4 py-2">Baumholder · Montabaur</span>
              <span className="rounded-full border border-amber-300/15 bg-black/35 px-4 py-2">Verantwortungsvolles Spielen</span>
            </div>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#standorte"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 px-8 py-4 text-sm font-black uppercase tracking-wide text-black shadow-xl shadow-amber-500/20 transition hover:scale-[1.02]"
              >
                Unsere Standorte <MapPin size={18} />
              </a>
              <a
                href="#gastronomie"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-300/25 bg-black/35 px-8 py-4 text-sm font-black uppercase tracking-wide text-white backdrop-blur transition hover:scale-[1.02] hover:border-amber-300/50 hover:bg-amber-300/10"
              >
                Gastronomiepartner <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-16 grid max-w-5xl gap-4 rounded-[2rem] border border-amber-300/15 bg-black/45 p-4 shadow-2xl shadow-black/40 backdrop-blur md:grid-cols-3"
          >
            {[
              { icon: <Building2 size={22} />, label: "2 Standorte", text: "Baumholder & Montabaur" },
              { icon: <BadgeCheck size={22} />, label: "Seriöser Betrieb", text: "Klare Regeln & Jugendschutz" },
              { icon: <HeartHandshake size={22} />, label: "Spielerschutz", text: "Verantwortung im Mittelpunkt" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-300/10 text-amber-300">
                  {item.icon}
                </div>
                <div className="font-black text-white">{item.label}</div>
                <div className="mt-1 text-sm text-zinc-400">{item.text}</div>
              </div>
            ))}
          </motion.div>

          <div className="mt-10 grid overflow-hidden rounded-[2rem] border border-amber-300/15 bg-black/45 shadow-2xl backdrop-blur md:grid-cols-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`p-8 text-center transition hover:bg-amber-300/[0.04] ${
                  index !== 0 ? "border-t border-amber-300/10 md:border-l md:border-t-0" : ""
                }`}
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-amber-300/15 bg-amber-300/10">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black uppercase tracking-wide">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="ueber-uns" className="bg-[#080604] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div {...fadeUp} className={`${premiumCard} p-8`}>
            <div className="flex min-h-[360px] flex-col items-center justify-center rounded-[1.5rem] border border-amber-300/10 bg-black/50 p-8 text-center">
              <img src={logoUrl} alt="PG Pro Games GmbH Logo" className="h-44 w-44 rounded-3xl object-contain" />
              <div className="mt-6 text-3xl font-black tracking-[0.22em]">PG PRO GAMES</div>
              <div className="mt-2 text-lg tracking-[0.28em] text-amber-300/70">SPIELHALLE VEGAS</div>
            </div>
          </motion.div>

          <motion.div {...fadeUp}>
            <p className="font-black uppercase tracking-[0.22em] text-amber-300">Über uns</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Moderne Spielunterhaltung mit seriösem Anspruch.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Die PG Pro Games GmbH betreibt unter dem Namen Spielhalle Vegas moderne Spielhallen in Baumholder und Montabaur. Unser Ziel ist eine gepflegte, angenehme und verantwortungsvolle Atmosphäre für erwachsene Gäste.
            </p>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Neben unseren eigenen Standorten sind wir Ansprechpartner für Gastronomiebetriebe, die an einer professionellen Automatenaufstellung interessiert sind.
            </p>
            <a href="#standorte" className="mt-8 inline-flex items-center gap-2 rounded-xl border border-amber-300/35 px-7 py-4 text-sm font-black uppercase tracking-wide text-amber-100 transition hover:bg-amber-300 hover:text-black">
              Standorte ansehen <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      <section id="standorte" className="bg-[#0d0a07] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="font-black uppercase tracking-[0.22em] text-amber-300">Standorte</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Spielhalle Vegas in Baumholder und Montabaur.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Besuchen Sie unsere modernen Spielhallen mit gepflegter Atmosphäre und freundlichem Service.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {locations.map((location, index) => (
              <motion.div
                key={location.city}
                {...fadeUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${premiumCard} p-8 transition hover:-translate-y-1 hover:border-amber-300/35`}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl border border-amber-300/15 bg-amber-300/10">
                  <MapPin className="text-amber-300" size={30} />
                </div>
                <h3 className="text-3xl font-black">Spielhalle Vegas {location.city}</h3>
                <p className="mt-4 text-lg leading-8 text-zinc-300">{location.address}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex rounded-xl border border-amber-300/25 px-5 py-3 text-sm font-bold text-amber-100 transition hover:bg-amber-300 hover:text-black"
                >
                  Route öffnen
                </a>
                <div className="mt-7 rounded-2xl border border-amber-300/10 bg-black/35 p-6 leading-8">
                  <p className="mb-2 flex items-center gap-2 font-black text-zinc-200"><Clock size={18} className="text-amber-300" /> Öffnungszeiten</p>
                  <p className="text-zinc-300">Montag–Samstag: 08:00–02:00 Uhr</p>
                  <p className="text-zinc-300">Sonn- und Feiertage: 11:00–02:00 Uhr</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="gastronomie" className="bg-[#080604] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div {...fadeUp}>
            <p className="font-black uppercase tracking-[0.22em] text-amber-300">Für Gastronomiepartner</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Automatenaufstellung für Gastronomien in Rheinland-Pfalz und Hessen.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Sie betreiben eine Bar, Kneipe oder Gastronomie und möchten Ihren Gästen ein zusätzliches Entertainment-Angebot bieten? PG Pro Games GmbH ist Ihr zuverlässiger Ansprechpartner für professionelle Automatenaufstellung.
            </p>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Wir begleiten Sie mit persönlicher Betreuung, klaren Absprachen und einem seriösen Betrieb innerhalb gesetzlicher Vorgaben.
            </p>
            <a href="#kontakt" className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 px-8 py-4 text-sm font-black uppercase tracking-wide text-black shadow-xl shadow-amber-500/20 transition hover:scale-[1.02]">
              Kooperation anfragen <Handshake size={18} />
            </a>
          </motion.div>

          <motion.div {...fadeUp} className={`${premiumCard} p-8`}>
            <div className="space-y-4">
              {partnerBenefits.map((item) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-amber-300/10 bg-white/[0.04] p-5 transition hover:bg-amber-300/[0.06]">
                  <CheckCircle className="mt-1 shrink-0 text-amber-300" size={21} />
                  <span className="leading-7 text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="spielerschutz" className="bg-[#11100e] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div {...fadeUp} className={`${premiumCard} p-8`}>
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-amber-300/15 bg-amber-300/10">
              <HeartHandshake className="text-amber-300" size={38} />
            </div>
            <h2 className="text-3xl font-black">Spielerschutz</h2>
            <p className="mt-4 leading-8 text-zinc-300">
              Verantwortungsvolles Spielen steht bei uns an erster Stelle. Unsere Standorte richten sich ausschließlich an erwachsene Gäste ab 18 Jahren.
            </p>
            <a href="#kontakt" className="mt-7 inline-flex rounded-xl border border-amber-300/35 px-6 py-3 text-sm font-black uppercase tracking-wide text-amber-100 transition hover:bg-amber-300 hover:text-black">
              Kontakt aufnehmen
            </a>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {protection.map((item, index) => (
              <motion.div
                key={item}
                {...fadeUp}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="rounded-2xl border border-amber-300/10 bg-black/30 p-6 transition hover:bg-amber-300/[0.05]"
              >
                <CheckCircle className="mb-4 text-amber-300" size={24} />
                <p className="leading-7 text-zinc-300">{item}</p>
              </motion.div>
            ))}
            <motion.div {...fadeUp} className="rounded-2xl border border-amber-300/15 bg-amber-300/10 p-6 md:col-span-2">
              <p className="font-bold text-amber-100">Hinweis: Glücksspiel kann süchtig machen. Teilnahme nur ab 18 Jahren.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="relative overflow-hidden bg-[#080604] px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.12),transparent_35%)]" />
        <div className={`relative mx-auto max-w-6xl ${premiumCard} p-8 backdrop-blur md:p-12`}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <motion.div {...fadeUp}>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl border border-amber-300/15 bg-amber-300/10">
                <Mail className="text-amber-300" size={30} />
              </div>
              <h2 className="text-4xl font-black tracking-tight">Kontakt</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
                Sie haben Fragen zu unseren Spielhallen, Standorten, Öffnungszeiten oder zur Automatenaufstellung? Kontaktieren Sie uns gerne.
              </p>
              <div className="mt-8 flex flex-col gap-4 text-zinc-400">
                <span className="inline-flex items-center gap-2"><UserCheck size={17} className="text-amber-300" /> E. Topal</span>
                <span className="inline-flex items-center gap-2"><Mail size={17} className="text-amber-300" /> et@pgprogames.de</span>
                <span className="inline-flex items-center gap-2"><Phone size={17} className="text-amber-300" /> +49 176 22398057</span>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="rounded-[2rem] border border-amber-300/10 bg-black/30 p-8">
              <h3 className="text-2xl font-black">Direkter Kontakt</h3>
              <p className="mt-3 leading-8 text-zinc-400">
                Für allgemeine Fragen, Kooperationen oder Automatenaufstellungen kontaktieren Sie uns direkt per E-Mail oder telefonisch.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:info@pgprogames.de"
                  className="flex items-center justify-between rounded-2xl border border-amber-300/10 bg-white/[0.04] px-6 py-5 transition hover:bg-amber-300/[0.08]"
                >
                  <div>
                    <div className="text-sm text-zinc-500">E-Mail</div>
                    <div className="mt-1 text-lg font-bold text-white">info@pgprogames.de</div>
                  </div>
                  <ArrowRight size={20} className="text-amber-300" />
                </a>

                <a
                  href="tel:+4917622398057"
                  className="flex items-center justify-between rounded-2xl border border-amber-300/10 bg-white/[0.04] px-6 py-5 transition hover:bg-amber-300/[0.08]"
                >
                  <div>
                    <div className="text-sm text-zinc-500">Telefon</div>
                    <div className="mt-1 text-lg font-bold text-white">+49 176 22398057</div>
                  </div>
                  <Phone size={20} className="text-amber-300" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="impressum" className="bg-[#f7f1e6] px-6 py-24 text-zinc-950">
        <div className="mx-auto max-w-5xl">
          <p className="font-black uppercase tracking-[0.22em] text-amber-700">Impressum</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Rechtliche Angaben</h2>
          <div className="mt-10 rounded-[2rem] border border-amber-200 bg-white/80 p-8 leading-8 shadow-sm">
            <p><strong>PG Pro Games GmbH</strong></p>
            <p>Aulenbacher Straße 2<br />55774 Baumholder</p>
            <p className="mt-6"><strong>Vertreten durch:</strong><br />Geschäftsführer Erdem Topal</p>
            <p className="mt-6"><strong>Kontakt</strong><br />Telefon: +49 176 22398057<br />E-Mail: info@pgprogames.de</p>
            <p className="mt-6"><strong>Registereintrag</strong><br />Amtsgericht Bad Kreuznach<br />HRB 23504</p>
          </div>
        </div>
      </section>

      <section id="datenschutz" className="bg-[#0b0907] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="font-black uppercase tracking-[0.22em] text-amber-300">Datenschutz</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Datenschutzerklärung</h2>
          <div className="mt-10 rounded-[2rem] border border-amber-300/10 bg-white/[0.04] p-8 leading-8 text-zinc-300 shadow-2xl">
            <p>Der Schutz Ihrer persönlichen Daten ist uns wichtig. Personenbezogene Daten werden auf dieser Website nur im technisch notwendigen Umfang verarbeitet.</p>
            <p className="mt-6">Beim Besuch dieser Website können durch den Hostinganbieter automatisch technische Informationen wie Browsertyp, Betriebssystem, Uhrzeit des Zugriffs, Referrer-URL oder IP-Adresse in sogenannten Server-Logfiles verarbeitet werden. Diese Verarbeitung dient der technischen Sicherheit und Stabilität der Website.</p>
            <p className="mt-6">Diese Website wird bei einem externen Hostinganbieter betrieben. Dabei können personenbezogene Daten auf Servern des Hostinganbieters verarbeitet werden.</p>
            <p className="mt-6">Die Datenübertragung dieser Website erfolgt verschlüsselt über HTTPS.</p>
            <p className="mt-6">Wenn Sie uns per E-Mail oder telefonisch kontaktieren, werden Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Eine Weitergabe an Dritte erfolgt nicht ohne Ihre ausdrückliche Zustimmung.</p>
            <p className="mt-6">Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten sowie auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch gegen die Verarbeitung.</p>
            <p className="mt-6">Außerdem besteht ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde.</p>
            <p className="mt-6">Für externe Links zu fremden Inhalten übernehmen wir trotz sorgfältiger Kontrolle keine Haftung.</p>
            <p className="mt-6">Verantwortlich für die Datenverarbeitung:<br />PG Pro Games GmbH<br />Aulenbacher Straße 2<br />55774 Baumholder<br />E-Mail: info@pgprogames.de</p>
            <p className="mt-6">Diese Datenschutzerklärung stellt eine DSGVO-Grundversion dar und kann bei Bedarf erweitert oder angepasst werden.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-amber-300/10 bg-black px-6 py-10 text-sm text-zinc-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-4">
            <img src={logoUrl} alt="PG Pro Games GmbH Logo" className="h-12 w-12 rounded-xl object-contain ring-1 ring-amber-300/15" />
            <div>
              <div className="font-black tracking-[0.18em] text-white">PG PRO GAMES</div>
              <div className="text-amber-300/70">Spielhalle Vegas</div>
            </div>
          </div>
          <div className="text-center md:text-right">
            <div>© {new Date().getFullYear()} PG Pro Games GmbH. Alle Rechte vorbehalten.</div>
            <div className="mt-2 max-w-3xl">Glücksspiel kann süchtig machen. Teilnahme erst ab 18 Jahren. Übermäßiges Spiel ist keine Lösung bei persönlichen Problemen. Beratung und Informationen unter bioeg.de</div>
            <div className="mt-3 flex justify-center gap-4 md:justify-end">
              <a href="#impressum" className="transition hover:text-amber-300">Impressum</a>
              <a href="#datenschutz" className="transition hover:text-amber-300">Datenschutz</a>
              <a href="#kontakt" className="transition hover:text-amber-300">Kontakt</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
