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
} from "lucide-react";

const logoUrl = "/logo.png";

export default function Website() {
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

  return (
    <main className="min-h-screen bg-[#040404] text-white">
      <header className="sticky top-0 z-50 border-b border-amber-400/20 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-4">
            <img src={logoUrl} alt="PG Pro Games GmbH Logo" className="h-16 w-16 rounded-xl object-contain" />
            <div className="hidden sm:block">
              <div className="text-lg font-black tracking-[0.22em]">PG PRO GAMES</div>
              <div className="text-sm tracking-[0.28em] text-zinc-400">GmbH</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-xs font-bold uppercase tracking-wide text-zinc-300 lg:flex">
            <a href="#home" className="text-amber-300">Home</a>
            <a href="#ueber-uns" className="hover:text-amber-300">Über uns</a>
            <a href="#gastronomie" className="hover:text-amber-300">Gastronomie</a>
            <a href="#spielerschutz" className="hover:text-amber-300">Spielerschutz</a>
            <a href="#standorte" className="hover:text-amber-300">Standorte</a>
            <a href="#kontakt" className="hover:text-amber-300">Kontakt</a>
          </nav>

          <a href="#kontakt" className="hidden rounded-xl border border-amber-400/70 px-5 py-3 text-xs font-black uppercase tracking-wide text-amber-300 transition hover:bg-amber-400 hover:text-black md:inline-flex">
            Kontakt
          </a>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden border-b border-amber-400/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.24),transparent_35%),radial-gradient(circle_at_15%_40%,rgba(153,27,27,0.28),transparent_32%),radial-gradient(circle_at_85%_45%,rgba(147,51,234,0.16),transparent_30%),linear-gradient(135deg,#050505_0%,#140706_52%,#020202_100%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(245,158,11,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,.08)_1px,transparent_1px)] [background-size:54px_54px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-5xl text-center"
          >
            <img src={logoUrl} alt="PG Pro Games GmbH Logo" className="mx-auto mb-8 h-32 w-32 rounded-3xl object-contain shadow-2xl shadow-amber-900/20" />
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-black/40 px-5 py-2 text-sm font-semibold text-amber-100 backdrop-blur">
              <Sparkles size={16} /> Willkommen bei PG Pro Games GmbH
            </p>

            <h1 className="text-5xl font-black leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
              Spielen. Erleben. <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">Genießen.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
              Moderne Spielhallen mit stilvollem Ambiente in Baumholder und Montabaur — verantwortungsbewusst, gepflegt und kundenorientiert.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="#standorte" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 to-amber-500 px-8 py-4 text-sm font-black uppercase tracking-wide text-black shadow-xl shadow-amber-500/25 hover:from-amber-200 hover:to-amber-400">
                Unsere Standorte <MapPin size={18} />
              </a>
              <a href="#ueber-uns" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-black/35 px-8 py-4 text-sm font-black uppercase tracking-wide text-white backdrop-blur hover:bg-white/10">
                Mehr erfahren <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          <div className="mt-16 grid overflow-hidden rounded-[2rem] border border-amber-400/25 bg-black/45 shadow-2xl backdrop-blur md:grid-cols-4">
            {highlights.map((item, index) => (
              <div key={item.title} className={`p-8 text-center ${index !== 0 ? "border-t border-amber-400/15 md:border-l md:border-t-0" : ""}`}>
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/10">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black uppercase tracking-wide">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ueber-uns" className="bg-[#080808] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[2rem] border border-amber-400/20 bg-gradient-to-br from-amber-400/10 to-red-900/20 p-8 shadow-2xl">
            <div className="flex min-h-[360px] flex-col items-center justify-center rounded-[1.5rem] border border-white/10 bg-black/50 p-8 text-center">
              <img src={logoUrl} alt="PG Pro Games GmbH Logo" className="h-44 w-44 rounded-3xl object-contain" />
              <div className="mt-6 text-3xl font-black tracking-[0.22em]">PG PRO GAMES</div>
              <div className="mt-2 text-lg tracking-[0.28em] text-zinc-400">GmbH</div>
            </div>
          </div>

          <div>
            <p className="font-black uppercase tracking-[0.22em] text-amber-300">Über uns</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Moderne Spielunterhaltung mit seriösem Anspruch.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Die PG Pro Games GmbH betreibt unter dem Namen Spielhalle Vegas moderne Spielhallen in Baumholder und Montabaur. Unser Ziel ist eine gepflegte, angenehme und verantwortungsvolle Atmosphäre für erwachsene Gäste.
            </p>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Neben unseren eigenen Standorten sind wir außerdem Ansprechpartner für Gastronomiebetriebe, die an einer professionellen Automatenaufstellung interessiert sind.
            </p>
            <a href="#standorte" className="mt-8 inline-flex items-center gap-2 rounded-xl border border-amber-400/60 px-7 py-4 text-sm font-black uppercase tracking-wide text-amber-300 hover:bg-amber-400 hover:text-black">
              Standorte ansehen <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="standorte" className="bg-[#0c0c0c] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-black uppercase tracking-[0.22em] text-amber-300">Standorte</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Besuchen Sie Spielhalle Vegas in Ihrer Nähe.</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {locations.map((location) => (
              <div key={location.city} className="rounded-[2rem] border border-amber-400/20 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 shadow-2xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-400/15">
                  <MapPin className="text-amber-300" size={30} />
                </div>
                <h3 className="text-3xl font-black">Spielhalle Vegas {location.city}</h3>
                <p className="mt-4 text-lg leading-8 text-zinc-300">{location.address}</p>
                <div className="mt-7 rounded-2xl border border-white/10 bg-black/35 p-6 leading-8">
                  <p className="mb-2 flex items-center gap-2 font-black text-amber-200"><Clock size={18} /> Öffnungszeiten</p>
                  <p className="text-zinc-300">Montag–Samstag: 08:00–02:00 Uhr</p>
                  <p className="text-zinc-300">Sonn- und Feiertage: 11:00–02:00 Uhr</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gastronomie" className="bg-[#100705] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.22em] text-amber-300">Für Gastronomiepartner</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Automatenaufstellung für Gastronomien.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Sie betreiben eine Bar, Kneipe oder Gastronomie und möchten Ihren Gästen ein zusätzliches Entertainment-Angebot bieten? PG Pro Games GmbH ist Ihr zuverlässiger Ansprechpartner für professionelle Automatenaufstellung.
            </p>
            <a href="#kontakt" className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 to-amber-500 px-8 py-4 text-sm font-black uppercase tracking-wide text-black shadow-xl shadow-amber-500/25 hover:from-amber-200 hover:to-amber-400">
              Kooperation anfragen <Handshake size={18} />
            </a>
          </div>

          <div className="rounded-[2rem] border border-amber-400/20 bg-black/40 p-8 shadow-2xl">
            <div className="space-y-4">
              {[
                "Aufstellung in Bars, Kneipen und Gastronomiebetrieben",
                "Persönliche Betreuung und klare Absprachen",
                "Seriöser Betrieb innerhalb gesetzlicher Vorgaben",
                "Direkter Ansprechpartner: Erdem Topal",
              ].map((item) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <CheckCircle className="mt-1 shrink-0 text-amber-300" size={21} />
                  <span className="leading-7 text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="spielerschutz" className="bg-[#160606] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="rounded-[2rem] border border-red-400/20 bg-red-950/30 p-8 shadow-2xl">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-400/15">
              <HeartHandshake className="text-amber-300" size={38} />
            </div>
            <h2 className="text-3xl font-black">Spielerschutz</h2>
            <p className="mt-4 leading-8 text-zinc-300">
              Verantwortungsvolles Spielen steht bei uns an erster Stelle.
            </p>
            <a href="#kontakt" className="mt-7 inline-flex rounded-xl border border-amber-400/60 px-6 py-3 text-sm font-black uppercase tracking-wide text-amber-300 hover:bg-amber-400 hover:text-black">
              Kontakt aufnehmen
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {protection.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <CheckCircle className="mb-4 text-amber-300" size={24} />
                <p className="leading-7 text-zinc-300">{item}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-6 md:col-span-2">
              <p className="font-bold text-red-100">Hinweis: Glücksspiel kann süchtig machen. Teilnahme nur ab 18 Jahren.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="bg-[#080808] px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-amber-400/20 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 text-center shadow-2xl md:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-400/15">
            <Mail className="text-amber-200" size={30} />
          </div>
          <h2 className="text-4xl font-black tracking-tight">Kontakt</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
            Sie haben Fragen zu unseren Spielhallen, Standorten, Öffnungszeiten oder zur Automatenaufstellung? Kontaktieren Sie uns gerne.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4">
            <a href="mailto:info@pgprogames.de" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 to-amber-500 px-8 py-4 text-sm font-black uppercase tracking-wide text-black shadow-xl shadow-amber-500/25 hover:from-amber-200 hover:to-amber-400">
              info@pgprogames.de <ArrowRight size={18} />
            </a>
            <div className="flex flex-col gap-2 text-zinc-400 sm:flex-row sm:items-center sm:gap-6">
              <span className="inline-flex items-center justify-center gap-2"><UserCheck size={17} /> Erdem Topal</span>
              <span className="inline-flex items-center justify-center gap-2"><Mail size={17} /> et@pgprogames.de</span>
              <span className="inline-flex items-center justify-center gap-2"><Phone size={17} /> 017622398057</span>
            </div>
          </div>
        </div>
      </section>

      <section id="impressum" className="bg-white px-6 py-24 text-zinc-950">
        <div className="mx-auto max-w-5xl">
          <p className="font-black uppercase tracking-[0.22em] text-amber-700">Impressum</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Rechtliche Angaben</h2>
          <div className="mt-10 rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 leading-8 shadow-sm">
            <p><strong>PG Pro Games GmbH</strong></p>
            <p>Aulenbacher Straße 2<br />55774 Baumholder</p>
            <p className="mt-6"><strong>Vertreten durch:</strong><br />Geschäftsführer Erdem Topal</p>
            <p className="mt-6"><strong>Kontakt</strong><br />Telefon: 017622398057<br />E-Mail: info@pgprogames.de</p>
            <p className="mt-6"><strong>Registereintrag</strong><br />Amtsgericht Bad Kreuznach<br />HRB 23504</p>
          </div>
        </div>
      </section>

      <section id="datenschutz" className="bg-[#0b0b0b] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="font-black uppercase tracking-[0.22em] text-amber-300">Datenschutz</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Datenschutzerklärung</h2>
          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 leading-8 text-zinc-300 shadow-2xl">
            <p>Der Schutz Ihrer persönlichen Daten ist uns wichtig. Personenbezogene Daten werden auf dieser Website nur im technisch notwendigen Umfang verarbeitet.</p>
            <p className="mt-6">Beim Besuch dieser Website können durch den Hostinganbieter automatisch technische Informationen wie Browsertyp, Betriebssystem, Uhrzeit des Zugriffs, Referrer-URL oder IP-Adresse in sogenannten Server-Logfiles verarbeitet werden. Diese Verarbeitung dient der technischen Sicherheit und Stabilität der Website.</p>
            <p className="mt-6">Diese Website wird bei einem externen Hostinganbieter betrieben. Dabei können personenbezogene Daten auf Servern des Hostinganbieters verarbeitet werden.</p>
            <p className="mt-6">Die Datenübertragung dieser Website erfolgt verschlüsselt über HTTPS.</p>
            <p className="mt-6">Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Eine Weitergabe an Dritte erfolgt nicht ohne Ihre ausdrückliche Zustimmung.</p>
            <p className="mt-6">Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten sowie auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch gegen die Verarbeitung.</p>
            <p className="mt-6">Außerdem besteht ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde.</p>
            <p className="mt-6">Für externe Links zu fremden Inhalten übernehmen wir trotz sorgfältiger Kontrolle keine Haftung.</p>
            <p className="mt-6">Verantwortlich für die Datenverarbeitung:<br />PG Pro Games GmbH<br />Aulenbacher Straße 2<br />55774 Baumholder<br />E-Mail: info@pgprogames.de</p>
            <p className="mt-6">Diese Datenschutzerklärung stellt eine DSGVO-Grundversion dar und kann bei Bedarf erweitert oder angepasst werden.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-6 py-10 text-sm text-zinc-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-4">
            <img src={logoUrl} alt="PG Pro Games GmbH Logo" className="h-14 w-14 rounded-xl object-contain" />
            <div>
              <div className="font-black tracking-[0.18em] text-white">PG PRO GAMES</div>
              <div>GmbH</div>
            </div>
          </div>
          <div className="text-center md:text-right">
            <div>© {new Date().getFullYear()} PG Pro Games GmbH. Alle Rechte vorbehalten.</div>
            <div className="mt-2">Glücksspiel kann süchtig machen. Teilnahme erst ab 18 Jahren. Übermäßiges Spiel ist keine Lösung bei persönlichen Problemen! Beratung und Informationen unter bioeg.de</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
