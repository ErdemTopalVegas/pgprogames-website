"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle,
  Clock,
  Clover,
  Crown,
  Diamond,
  Handshake,
  HeartHandshake,
  MapPin,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  UserCheck,
  X,
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
  { city: "Baumholder", address: "Aulenbacher Straße 2, 55774 Baumholder" },
  { city: "Montabaur", address: "Alleestraße 35, 56410 Montabaur" },
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

const localSeo = [
  {
    title: "Spielhalle Baumholder",
    text: "Moderne Spielunterhaltung in Baumholder mit gepflegter Atmosphäre, freundlichem Service und verantwortungsvollem Betrieb.",
  },
  {
    title: "Spielhalle Montabaur",
    text: "Spielhalle Vegas in Montabaur: stilvolles Ambiente, klare Regeln und ein seriöses Umfeld für erwachsene Gäste.",
  },
  {
    title: "Automatenaufstellung Hessen",
    text: "Professionelle Automatenaufstellung für Bars, Kneipen und Gastronomiebetriebe in Hessen.",
  },
  {
    title: "Automatenaufstellung Rheinland-Pfalz",
    text: "Zuverlässiger Ansprechpartner für Automatenaufstellung in Rheinland-Pfalz mit persönlicher Betreuung.",
  },
];

const premiumCard =
  "rounded-[2rem] border border-amber-400/15 bg-gradient-to-br from-white/[0.08] via-white/[0.035] to-amber-950/10 shadow-2xl shadow-black/40";

const formspreeEndpoint = "https://formspree.io/f/mwvzvjyp";

function ConsentBanner({ mapsConsent, setMapsConsent }) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const saved = window.localStorage.getItem("pgprogames_maps_consent");
    if (saved === "accepted") setMapsConsent(true);
    if (!saved) setVisible(true);
  }, [setMapsConsent]);

  const accept = () => {
    window.localStorage.setItem("pgprogames_maps_consent", "accepted");
    setMapsConsent(true);
    setVisible(false);
  };

  const decline = () => {
    window.localStorage.setItem("pgprogames_maps_consent", "declined");
    setMapsConsent(false);
    setVisible(false);
  };

  if (!visible || mapsConsent) return null;

  return (
    <div className="fixed bottom-5 left-5 right-5 z-[9998] mx-auto max-w-5xl rounded-[1.5rem] border border-amber-300/20 bg-black/90 p-5 text-sm text-zinc-300 shadow-2xl shadow-black/60 backdrop-blur-xl">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-black uppercase tracking-wide text-white">Datenschutz-Einstellungen</div>
          <p className="mt-2 leading-6">
            Wir laden Google Maps erst nach Ihrer Zustimmung. Dabei können Daten an Google übertragen werden.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button onClick={decline} className="rounded-xl border border-white/15 px-5 py-3 font-bold text-white transition hover:bg-white/10">
            Ablehnen
          </button>
          <button onClick={accept} className="rounded-xl bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 px-5 py-3 font-black text-black transition hover:scale-[1.02]">
            Maps erlauben
          </button>
        </div>
      </div>
    </div>
  );
}

function MapEmbed({ location, mapsConsent, setMapsConsent }) {
  const accept = () => {
    window.localStorage.setItem("pgprogames_maps_consent", "accepted");
    setMapsConsent(true);
  };

  if (!mapsConsent) {
    return (
      <div className="mt-6 flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-amber-300/10 bg-black/50 p-8 text-center">
        <MapPin className="text-amber-300" size={34} />
        <h4 className="mt-4 text-xl font-black">Google Maps anzeigen</h4>
        <p className="mt-3 max-w-md leading-7 text-zinc-400">
          Zum Anzeigen der Karte wird Google Maps geladen. Dabei können Daten an Google übertragen werden.
        </p>
        <button onClick={accept} className="mt-6 rounded-xl bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 px-6 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:scale-[1.02]">
          Karte laden
        </button>
      </div>
    );
  }

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-amber-300/10 bg-black/40">
      <iframe
        title={`Google Maps ${location.city}`}
        src={`https://www.google.com/maps?q=${encodeURIComponent(location.address)}&output=embed`}
        className="h-[300px] w-full grayscale contrast-125 transition duration-700 hover:grayscale-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = React.useState("idle");
  const [acceptedPrivacy, setAcceptedPrivacy] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!acceptedPrivacy) {
      setStatus("privacy");
      return;
    }

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setAcceptedPrivacy(false);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <input type="hidden" name="_subject" value="Neue Anfrage über pgprogames.de" />
      <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-bold text-zinc-300">Name</label>
          <input
            required
            name="name"
            type="text"
            placeholder="Ihr Name"
            className="w-full rounded-2xl border border-amber-300/10 bg-black/35 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-300/50"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-zinc-300">E-Mail</label>
          <input
            required
            name="email"
            type="email"
            placeholder="ihre@email.de"
            className="w-full rounded-2xl border border-amber-300/10 bg-black/35 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-300/50"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-bold text-zinc-300">Telefon optional</label>
        <input
          name="telefon"
          type="tel"
          placeholder="Ihre Telefonnummer"
          className="w-full rounded-2xl border border-amber-300/10 bg-black/35 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-300/50"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-bold text-zinc-300">Nachricht</label>
        <textarea
          required
          name="nachricht"
          rows="5"
          placeholder="Worum geht es?"
          className="w-full resize-none rounded-2xl border border-amber-300/10 bg-black/35 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-300/50"
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-amber-300/10 bg-black/30 p-4 text-sm leading-6 text-zinc-400">
        <input
          type="checkbox"
          checked={acceptedPrivacy}
          onChange={(event) => setAcceptedPrivacy(event.target.checked)}
          className="mt-1 h-4 w-4 accent-amber-400"
        />
        <span>
          Ich habe die <a href="#datenschutz" className="font-bold text-amber-300 hover:text-amber-200">Datenschutzerklärung</a> gelesen und stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage verwendet werden.
        </span>
      </label>

      {status === "privacy" && <p className="text-sm font-bold text-amber-300">Bitte bestätigen Sie die Datenschutzerklärung.</p>}
      {status === "success" && <p className="rounded-2xl border border-green-400/20 bg-green-500/10 p-4 text-sm font-bold text-green-300">Ihre Nachricht wurde erfolgreich gesendet.</p>}
      {status === "error" && <p className="rounded-2xl border border-red-400/20 bg-red-500/10 p-4 text-sm font-bold text-red-300">Die Nachricht konnte nicht gesendet werden. Bitte kontaktieren Sie uns direkt per E-Mail.</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 px-8 py-4 text-sm font-black uppercase tracking-wide text-black shadow-xl shadow-amber-500/20 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Wird gesendet..." : "Nachricht senden"} <ArrowRight size={18} />
      </button>
    </form>
  );
}

export default function Page() {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [mapsConsent, setMapsConsent] = React.useState(false);

  React.useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.7 } }} className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.18),transparent_34%)]" />
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="absolute h-72 w-72 rounded-full border border-amber-300/10" />
            <motion.div initial={{ scale: 0.86, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.9 }} className="relative text-center">
              <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-amber-300/20 bg-black/60 shadow-2xl shadow-amber-500/20 backdrop-blur-xl">
                <img src={logoUrl} alt="PG Pro Games" className="h-24 w-24 object-contain" />
              </div>
              <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.2, delay: 0.15 }} className="mx-auto mt-8 h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
              <div className="mt-6 text-sm font-black uppercase tracking-[0.45em] text-amber-300">Spielhalle Vegas</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-screen overflow-x-hidden bg-[#050403] font-sans text-white selection:bg-amber-300 selection:text-black">
        <header className="sticky top-0 z-50 border-b border-amber-400/10 bg-[#050403]/90 backdrop-blur-2xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <a href="#home" className="flex items-center gap-3" aria-label="PG Pro Games Startseite">
              <img src={logoUrl} alt="PG Pro Games GmbH Logo" className="h-11 w-11 rounded-xl object-contain ring-1 ring-amber-300/15" />
              <div className="hidden sm:block">
                <div className="text-sm font-black tracking-[0.24em] text-white">PG PRO GAMES</div>
                <div className="text-[11px] tracking-[0.32em] text-amber-300/80">SPIELHALLE VEGAS</div>
              </div>
            </a>

            <nav className="hidden items-center gap-7 text-xs font-bold uppercase tracking-wide text-zinc-300 lg:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-amber-300">{item.label}</a>
              ))}
            </nav>

            <a href="#kontakt" className="hidden rounded-xl bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 px-5 py-3 text-xs font-black uppercase tracking-wide text-black shadow-lg shadow-amber-500/20 transition hover:scale-[1.03] md:inline-flex">Kontakt</a>

            <button onClick={() => setMobileMenu((value) => !value)} className="flex items-center justify-center rounded-xl border border-amber-300/20 bg-white/5 p-3 text-white lg:hidden" aria-label={mobileMenu ? "Menü schließen" : "Menü öffnen"}>
              {mobileMenu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {mobileMenu && (
            <div className="border-t border-amber-400/10 bg-[#050403]/95 px-6 py-5 lg:hidden">
              <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-wide text-zinc-300">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setMobileMenu(false)} className="transition hover:text-amber-300">{item.label}</a>
                ))}
              </div>
            </div>
          )}
        </header>

        <section id="home" className="relative overflow-hidden border-b border-amber-400/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.22),transparent_32%),radial-gradient(circle_at_15%_35%,rgba(185,28,28,0.22),transparent_28%),radial-gradient(circle_at_88%_42%,rgba(251,191,36,0.16),transparent_28%),linear-gradient(135deg,#050403_0%,#150f0a_48%,#030202_100%)]" />
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(251,191,36,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,.08)_1px,transparent_1px)] [background-size:58px_58px]" />
          <motion.div animate={{ y: [0, -28, 0], opacity: [0.45, 0.8, 0.45] }} transition={{ duration: 8, repeat: Infinity }} className="absolute -left-24 top-36 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
          <motion.div animate={{ y: [0, 36, 0], opacity: [0.28, 0.5, 0.28] }} transition={{ duration: 10, repeat: Infinity }} className="absolute -right-24 bottom-12 h-96 w-96 rounded-full bg-red-900/30 blur-3xl" />
          <motion.div animate={{ x: ["-20%", "120%"] }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }} className="absolute top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-amber-200/5 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
            <motion.div {...fadeUp} className="mx-auto max-w-5xl text-center">
              <div className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-[2rem] border border-amber-300/20 bg-black/45 p-3 shadow-2xl shadow-amber-500/10 backdrop-blur">
                <img src={logoUrl} alt="PG Pro Games GmbH Logo" className="h-full w-full object-contain" />
              </div>

              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-black/40 px-5 py-2 text-sm font-semibold text-amber-100 backdrop-blur">
                <Crown size={16} className="text-amber-300" /> Spielhalle Vegas by PG Pro Games GmbH
              </p>

              <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="text-5xl font-black leading-[0.96] tracking-tight md:text-7xl lg:text-[7rem]">
                Premium Spielunterhaltung in
                <span className="block bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-700 bg-clip-text text-transparent">stilvollem Ambiente.</span>
              </motion.h1>

              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
                Moderne Spielhallen in Baumholder und Montabaur — gepflegt, verantwortungsbewusst und mit persönlichem Service für erwachsene Gäste.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-bold uppercase tracking-wide text-zinc-300">
                <span className="rounded-full border border-amber-300/15 bg-black/35 px-4 py-2">Zutritt ab 18 Jahren</span>
                <span className="rounded-full border border-amber-300/15 bg-black/35 px-4 py-2">Baumholder · Montabaur</span>
                <span className="rounded-full border border-amber-300/15 bg-black/35 px-4 py-2">Verantwortungsvolles Spielen</span>
              </div>

              <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }} className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <a href="#standorte" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 px-8 py-4 text-sm font-black uppercase tracking-wide text-black shadow-xl shadow-amber-500/20 transition hover:scale-[1.02]">Unsere Standorte <MapPin size={18} /></a>
                <a href="#gastronomie" className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-300/25 bg-black/35 px-8 py-4 text-sm font-black uppercase tracking-wide text-white backdrop-blur transition hover:scale-[1.02] hover:border-amber-300/50 hover:bg-amber-300/10">Gastronomiepartner <ArrowRight size={18} /></a>
              </motion.div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }} className="mx-auto mt-16 grid max-w-5xl gap-4 rounded-[2rem] border border-amber-300/15 bg-black/45 p-4 shadow-2xl shadow-black/40 backdrop-blur md:grid-cols-3">
              {[
                { icon: <Building2 size={22} />, label: "2 Standorte", text: "Baumholder & Montabaur" },
                { icon: <BadgeCheck size={22} />, label: "Seriöser Betrieb", text: "Klare Regeln & Jugendschutz" },
                { icon: <HeartHandshake size={22} />, label: "Spielerschutz", text: "Verantwortung im Mittelpunkt" },
              ].map((item) => (
                <motion.div whileHover={{ y: -5 }} key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left transition hover:bg-amber-300/[0.05]">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-300/10 text-amber-300">{item.icon}</div>
                  <div className="font-black text-white">{item.label}</div>
                  <div className="mt-1 text-sm text-zinc-400">{item.text}</div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-10 grid overflow-hidden rounded-[2rem] border border-amber-300/15 bg-black/45 shadow-2xl backdrop-blur md:grid-cols-4">
              {highlights.map((item, index) => (
                <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.6, delay: index * 0.08 }} className={`p-8 text-center transition hover:bg-amber-300/[0.04] ${index !== 0 ? "border-t border-amber-300/10 md:border-l md:border-t-0" : ""}`}>
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-amber-300/15 bg-amber-300/10">{item.icon}</div>
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
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Moderne Spielunterhaltung mit seriösem Anspruch.</h2>
              <p className="mt-6 text-lg leading-8 text-zinc-300">Die PG Pro Games GmbH betreibt unter dem Namen Spielhalle Vegas moderne Spielhallen in Baumholder und Montabaur. Unser Ziel ist eine gepflegte, angenehme und verantwortungsvolle Atmosphäre für erwachsene Gäste.</p>
              <p className="mt-5 text-lg leading-8 text-zinc-300">Neben unseren eigenen Standorten sind wir Ansprechpartner für Gastronomiebetriebe, die an einer professionellen Automatenaufstellung interessiert sind.</p>
              <a href="#standorte" className="mt-8 inline-flex items-center gap-2 rounded-xl border border-amber-300/35 px-7 py-4 text-sm font-black uppercase tracking-wide text-amber-100 transition hover:bg-amber-300 hover:text-black">Standorte ansehen <ArrowRight size={18} /></a>
            </motion.div>
          </div>
        </section>

        <section id="standorte" className="bg-[#0d0a07] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <motion.div {...fadeUp} className="max-w-3xl">
              <p className="font-black uppercase tracking-[0.22em] text-amber-300">Standorte</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Spielhalle Vegas in Baumholder und Montabaur.</h2>
              <p className="mt-5 text-lg leading-8 text-zinc-300">Besuchen Sie unsere modernen Spielhallen mit gepflegter Atmosphäre und freundlichem Service.</p>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {locations.map((location, index) => (
                <motion.div key={location.city} {...fadeUp} transition={{ duration: 0.6, delay: index * 0.1 }} className={`${premiumCard} p-8 transition hover:-translate-y-1 hover:border-amber-300/35`}>
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl border border-amber-300/15 bg-amber-300/10"><MapPin className="text-amber-300" size={30} /></div>
                  <h3 className="text-3xl font-black">Spielhalle Vegas {location.city}</h3>
                  <p className="mt-4 text-lg leading-8 text-zinc-300">{location.address}</p>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-xl border border-amber-300/25 px-5 py-3 text-sm font-bold text-amber-100 transition hover:bg-amber-300 hover:text-black">Route öffnen</a>
                  <div className="mt-7 rounded-2xl border border-amber-300/10 bg-black/35 p-6 leading-8">
                    <p className="mb-2 flex items-center gap-2 font-black text-zinc-200"><Clock size={18} className="text-amber-300" /> Öffnungszeiten</p>
                    <p className="text-zinc-300">Montag–Samstag: 08:00–02:00 Uhr</p>
                    <p className="text-zinc-300">Sonn- und Feiertage: 11:00–02:00 Uhr</p>
                  </div>
                  <MapEmbed location={location} mapsConsent={mapsConsent} setMapsConsent={setMapsConsent} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="gastronomie" className="bg-[#080604] px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div {...fadeUp}>
              <p className="font-black uppercase tracking-[0.22em] text-amber-300">Für Gastronomiepartner</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Automatenaufstellung für Gastronomien in Rheinland-Pfalz und Hessen.</h2>
              <p className="mt-6 text-lg leading-8 text-zinc-300">Sie betreiben eine Bar, Kneipe oder Gastronomie und möchten Ihren Gästen ein zusätzliches Entertainment-Angebot bieten? PG Pro Games GmbH ist Ihr zuverlässiger Ansprechpartner für professionelle Automatenaufstellung.</p>
              <p className="mt-5 text-lg leading-8 text-zinc-300">Wir begleiten Sie mit persönlicher Betreuung, klaren Absprachen und einem seriösen Betrieb innerhalb gesetzlicher Vorgaben.</p>
              <a href="#kontakt" className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 px-8 py-4 text-sm font-black uppercase tracking-wide text-black shadow-xl shadow-amber-500/20 transition hover:scale-[1.02]">Kooperation anfragen <Handshake size={18} /></a>
            </motion.div>

            <motion.div {...fadeUp} className={`${premiumCard} p-8`}>
              <div className="space-y-4">
                {partnerBenefits.map((item) => (
                  <div key={item} className="flex gap-4 rounded-2xl border border-amber-300/10 bg-white/[0.04] p-5 transition hover:bg-amber-300/[0.06]"><CheckCircle className="mt-1 shrink-0 text-amber-300" size={21} /><span className="leading-7 text-zinc-300">{item}</span></div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="spielerschutz" className="bg-[#11100e] px-6 py-24">
          <div className="mx-auto mb-14 max-w-7xl rounded-[2rem] border border-amber-300/10 bg-gradient-to-r from-amber-300/10 via-black/40 to-red-950/20 p-8 shadow-2xl">
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-black/40 px-4 py-2 text-xs font-black uppercase tracking-wide text-amber-200">Responsible Gaming</div>
                <h3 className="text-3xl font-black">Verantwortungsbewusstes Spielen</h3>
                <p className="mt-4 leading-8 text-zinc-300">Glücksspiel dient ausschließlich der Unterhaltung. Wir legen großen Wert auf Spielerschutz, Jugendschutz und einen verantwortungsvollen Umgang mit dem Spiel.</p>
              </div>
              <div className="rounded-2xl border border-amber-300/10 bg-black/35 p-6">
                <h4 className="mb-4 text-lg font-black text-amber-200">Wichtige Hinweise</h4>
                <ul className="space-y-3 text-zinc-300"><li>• Zutritt ausschließlich ab 18 Jahren</li><li>• Glücksspiel kann süchtig machen</li><li>• Spielen Sie bewusst und in Maßen</li><li>• Setzen Sie persönliche Limits</li><li>• Glücksspiel ist keine Einkommensquelle</li></ul>
              </div>
              <div className="rounded-2xl border border-amber-300/10 bg-black/35 p-6">
                <h4 className="mb-4 text-lg font-black text-amber-200">Hilfsangebote</h4>
                <div className="space-y-4 text-zinc-300"><div><div className="font-bold text-white">BZgA</div><div>www.check-dein-spiel.de</div></div><div><div className="font-bold text-white">Telefonberatung</div><div>0800 1 37 27 00</div></div><div><div className="font-bold text-white">Anonyme Hilfe</div><div>kostenfrei und vertraulich</div></div></div>
              </div>
            </div>
          </div>

          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <motion.div {...fadeUp} className={`${premiumCard} p-8`}>
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-amber-300/15 bg-amber-300/10"><HeartHandshake className="text-amber-300" size={38} /></div>
              <h2 className="text-3xl font-black">Spielerschutz</h2>
              <p className="mt-4 leading-8 text-zinc-300">Verantwortungsvolles Spielen steht bei uns an erster Stelle. Unsere Standorte richten sich ausschließlich an erwachsene Gäste ab 18 Jahren.</p>
              <a href="#kontakt" className="mt-7 inline-flex rounded-xl border border-amber-300/35 px-6 py-3 text-sm font-black uppercase tracking-wide text-amber-100 transition hover:bg-amber-300 hover:text-black">Kontakt aufnehmen</a>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2">
              {protection.map((item, index) => (
                <motion.div key={item} {...fadeUp} transition={{ duration: 0.55, delay: index * 0.06 }} className="rounded-2xl border border-amber-300/10 bg-black/30 p-6 transition hover:bg-amber-300/[0.05]"><CheckCircle className="mb-4 text-amber-300" size={24} /><p className="leading-7 text-zinc-300">{item}</p></motion.div>
              ))}
              <motion.div {...fadeUp} className="rounded-2xl border border-amber-300/15 bg-amber-300/10 p-6 md:col-span-2"><p className="font-bold text-amber-100">Hinweis: Glücksspiel kann süchtig machen. Teilnahme nur ab 18 Jahren.</p></motion.div>
            </div>
          </div>
        </section>

        <section className="bg-[#070605] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <motion.div {...fadeUp} className="max-w-3xl"><p className="font-black uppercase tracking-[0.22em] text-amber-300">Lokale Bereiche</p><h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Regionen & Leistungen</h2><p className="mt-5 text-lg leading-8 text-zinc-300">PG Pro Games GmbH ist Ihr Ansprechpartner für moderne Spielhallen und professionelle Automatenaufstellung in Rheinland-Pfalz und Hessen.</p></motion.div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {localSeo.map((item) => (
                <motion.article whileHover={{ y: -6 }} key={item.title} className="rounded-[2rem] border border-amber-300/10 bg-white/[0.03] p-6 transition hover:border-amber-300/30 hover:bg-amber-300/[0.04]"><div className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-amber-300 to-yellow-600" /><h3 className="text-xl font-black">{item.title}</h3><p className="mt-4 leading-7 text-zinc-400">{item.text}</p></motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="relative overflow-hidden bg-[#080604] px-6 py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.12),transparent_35%)]" />
          <div className={`relative mx-auto max-w-6xl ${premiumCard} p-8 backdrop-blur md:p-12`}>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <motion.div {...fadeUp}><div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl border border-amber-300/15 bg-amber-300/10"><Mail className="text-amber-300" size={30} /></div><h2 className="text-4xl font-black tracking-tight">Kontakt</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">Sie haben Fragen zu unseren Spielhallen, Standorten, Öffnungszeiten oder zur Automatenaufstellung? Kontaktieren Sie uns gerne.</p><div className="mt-8 flex flex-col gap-4 text-zinc-400"><span className="inline-flex items-center gap-2"><UserCheck size={17} className="text-amber-300" /> E. Topal</span><span className="inline-flex items-center gap-2"><Mail size={17} className="text-amber-300" /> et@pgprogames.de</span><span className="inline-flex items-center gap-2"><Phone size={17} className="text-amber-300" /> +49 176 22398057</span></div></motion.div>
              <motion.div {...fadeUp} className="rounded-[2rem] border border-amber-300/10 bg-black/30 p-8"><h3 className="text-2xl font-black">Kontaktformular</h3><p className="mt-3 leading-8 text-zinc-400">Senden Sie uns Ihre Anfrage direkt über das Formular. Sie erhalten keine automatische Bestätigungs-Mail.</p><ContactForm /><div className="mt-8 space-y-4"><a href="mailto:info@pgprogames.de" className="flex items-center justify-between rounded-2xl border border-amber-300/10 bg-white/[0.04] px-6 py-5 transition hover:bg-amber-300/[0.08]"><div><div className="text-sm text-zinc-500">Alternativ per E-Mail</div><div className="mt-1 text-lg font-bold text-white">info@pgprogames.de</div></div><ArrowRight size={20} className="text-amber-300" /></a><a href="tel:+4917622398057" className="flex items-center justify-between rounded-2xl border border-amber-300/10 bg-white/[0.04] px-6 py-5 transition hover:bg-amber-300/[0.08]"><div><div className="text-sm text-zinc-500">Oder telefonisch</div><div className="mt-1 text-lg font-bold text-white">+49 176 22398057</div></div><Phone size={20} className="text-amber-300" /></a></div></motion.div>
            </div>
          </div>
        </section>

        <section id="impressum" className="bg-[#f7f1e6] px-6 py-24 text-zinc-950"><div className="mx-auto max-w-5xl"><p className="font-black uppercase tracking-[0.22em] text-amber-700">Impressum</p><h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Rechtliche Angaben</h2><div className="mt-10 rounded-[2rem] border border-amber-200 bg-white/80 p-8 leading-8 shadow-sm"><p><strong>PG Pro Games GmbH</strong></p><p>Aulenbacher Straße 2<br />55774 Baumholder</p><p className="mt-6"><strong>Vertreten durch:</strong><br />Geschäftsführer Erdem Topal</p><p className="mt-6"><strong>Kontakt</strong><br />Telefon: +49 176 22398057<br />E-Mail: info@pgprogames.de</p><p className="mt-6"><strong>Registereintrag</strong><br />Amtsgericht Bad Kreuznach<br />HRB 23504</p></div></div></section>

        <section id="datenschutz" className="bg-[#0b0907] px-6 py-24"><div className="mx-auto max-w-5xl"><p className="font-black uppercase tracking-[0.22em] text-amber-300">Datenschutz</p><h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Datenschutzerklärung</h2><div className="mt-10 rounded-[2rem] border border-amber-300/10 bg-white/[0.04] p-8 leading-8 text-zinc-300 shadow-2xl"><h3 className="text-2xl font-black text-white">1. Datenschutz auf einen Blick</h3><p className="mt-5">Der Schutz Ihrer persönlichen Daten ist uns wichtig. Nachfolgend informieren wir Sie darüber, welche Daten beim Besuch dieser Website verarbeitet werden und zu welchem Zweck dies geschieht.</p><h3 className="mt-12 text-2xl font-black text-white">2. Verantwortlicher</h3><p className="mt-5">PG Pro Games GmbH<br />Aulenbacher Straße 2<br />55774 Baumholder<br />E-Mail: info@pgprogames.de<br />Telefon: +49 176 22398057</p><h3 className="mt-12 text-2xl font-black text-white">3. Hosting</h3><p className="mt-5">Diese Website wird bei einem externen Hostinganbieter betrieben. Personenbezogene Daten, die auf dieser Website erfasst werden, können auf den Servern des Hostinganbieters gespeichert werden.</p><h3 className="mt-12 text-2xl font-black text-white">4. Google Maps</h3><p className="mt-5">Google Maps wird auf dieser Website erst nach Ihrer ausdrücklichen Zustimmung geladen. Ohne Zustimmung wird keine Google-Karte eingebunden. Beim Laden der Karte können personenbezogene Daten, insbesondere Ihre IP-Adresse, an Google übertragen werden.</p><h3 className="mt-12 text-2xl font-black text-white">5. Kontaktaufnahme</h3><p className="mt-5">Wenn Sie uns per E-Mail oder telefonisch kontaktieren, werden Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.</p><h3 className="mt-12 text-2xl font-black text-white">6. SSL- bzw. TLS-Verschlüsselung</h3><p className="mt-5">Diese Website nutzt aus Sicherheitsgründen und zum Schutz vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.</p><h3 className="mt-12 text-2xl font-black text-white">7. Ihre Rechte</h3><p className="mt-5">Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.</p><h3 className="mt-12 text-2xl font-black text-white">8. Beschwerderecht</h3><p className="mt-5">Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde zu.</p><h3 className="mt-12 text-2xl font-black text-white">9. Hinweis</h3><p className="mt-5">Diese Datenschutzerklärung stellt eine allgemeine DSGVO-Grundlage dar und sollte bei Nutzung zusätzlicher Dienste wie Analytics, Meta Pixel oder Social-Media-Plugins erweitert werden.</p></div></div></section>

        <footer className="border-t border-amber-300/10 bg-black px-6 py-10 text-sm text-zinc-500"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row"><div className="flex items-center gap-4"><img src={logoUrl} alt="PG Pro Games GmbH Logo" className="h-12 w-12 rounded-xl object-contain ring-1 ring-amber-300/15" /><div><div className="font-black tracking-[0.18em] text-white">PG PRO GAMES</div><div className="text-amber-300/70">Spielhalle Vegas</div></div></div><div className="text-center md:text-right"><div>© {new Date().getFullYear()} PG Pro Games GmbH. Alle Rechte vorbehalten.</div><div className="mt-2 max-w-3xl">Glücksspiel kann süchtig machen. Teilnahme erst ab 18 Jahren. Übermäßiges Spiel ist keine Lösung bei persönlichen Problemen. Beratung und Informationen unter bioeg.de</div><div className="mt-3 flex justify-center gap-4 md:justify-end"><a href="#impressum" className="transition hover:text-amber-300">Impressum</a><a href="#datenschutz" className="transition hover:text-amber-300">Datenschutz</a><button onClick={() => { window.localStorage.removeItem("pgprogames_maps_consent"); setMapsConsent(false); }} className="transition hover:text-amber-300">Cookie-Einstellungen</button><a href="#kontakt" className="transition hover:text-amber-300">Kontakt</a></div></div></div></footer>

        <ConsentBanner mapsConsent={mapsConsent} setMapsConsent={setMapsConsent} />
      </main>
    </>
  );
}
