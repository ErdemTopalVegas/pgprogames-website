import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Dice5,
  HeartHandshake,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  UserCheck,
  Wine,
} from "lucide-react";

export default function Website() {
  const locations = [
    { city: "Baumholder", address: "Aulenbacher Straße 2, 55774 Baumholder" },
    { city: "Montabaur", address: "Alleestraße 35, 56410 Montabaur" },
  ];

  const highlights = [
    {
      icon: <Dice5 className="text-amber-300" size={28} />,
      title: "Moderne Spielgeräte",
      text: "Gepflegte Spielhallen mit moderner Ausstattung und angenehmer Atmosphäre.",
    },
    {
      icon: <Clock className="text-amber-300" size={28} />,
      title: "Lange Öffnungszeiten",
      text: "Montag bis Samstag 08:00–02:00 Uhr, sonn- und feiertags 11:00–02:00 Uhr.",
    },
    {
      icon: <ShieldCheck className="text-amber-300" size={28} />,
      title: "Verantwortungsvolles Spiel",
      text: "Jugendschutz, Spielerschutz und gesetzliche Vorgaben stehen bei uns im Mittelpunkt.",
    },
  ];

  const protection = [
    "Zutritt und Spielteilnahme ausschließlich ab 18 Jahren",
    "Hinweise zum verantwortungsvollen Umgang mit Glücksspiel",
    "Ansprechpartner bei Fragen zum Spielerschutz vor Ort",
    "Einhaltung gesetzlicher Vorgaben und Kontrollpflichten",
  ];

  return (
    <main className="min-h-screen bg-[#070504] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.26),transparent_34%),radial-gradient(circle_at_15%_35%,rgba(153,27,27,0.22),transparent_30%),linear-gradient(135deg,#070504_0%,#130806_50%,#030303_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-8">
          <nav className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-black/25 px-5 py-4 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 via-amber-600 to-red-800 shadow-lg shadow-amber-500/20">
                <Dice5 size={23} />
              </div>
              <div>
                <div className="text-base font-black tracking-tight sm:text-lg">Spielhalle Vegas</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-amber-200/80">PG Pro Games GmbH</div>
              </div>
            </div>

            <div className="hidden items-center gap-6 text-sm text-zinc-300 xl:flex">
              <a href="#erlebnis" className="hover:text-amber-200">Erlebnis</a>
              <a href="#standorte" className="hover:text-amber-200">Standorte</a>
              <a href="#gastronomie" className="hover:text-amber-200">Gastronomie</a>
              <a href="#spielerschutz" className="hover:text-amber-200">Spielerschutz</a>
              <a href="#kontakt" className="hover:text-amber-200">Kontakt</a>
            </div>

            <a href="#standorte" className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-black shadow-lg shadow-amber-500/25 hover:bg-amber-300">
              Standorte
            </a>
          </nav>

          <div className="mx-auto flex min-h-[calc(100vh-100px)] max-w-5xl flex-col items-center justify-center py-20 text-center">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-black/35 px-4 py-2 text-sm text-amber-100 backdrop-blur">
                <Sparkles size={16} /> Willkommen in der Spielhalle Vegas
              </p>

              <h1 className="text-5xl font-black leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
                Moderne Spielhallen mit Vegas-Flair.
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
                Besuchen Sie Spielhalle Vegas in Baumholder und Montabaur — gepflegte Atmosphäre, moderne Unterhaltung und verantwortungsvolles Spiel.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <a href="#standorte" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-8 py-4 font-bold text-black shadow-xl shadow-amber-500/25 hover:bg-amber-300">
                  Standorte ansehen <ArrowRight size={18} />
                </a>
                <a href="#gastronomie" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 font-bold text-zinc-200 hover:bg-white/10">
                  Automatenaufstellung
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-amber-400/20 bg-black/35 p-5 backdrop-blur">
                  <div className="text-3xl font-black text-amber-200">2</div>
                  <div className="mt-1 text-sm text-zinc-400">Standorte</div>
                </div>
                <div className="rounded-3xl border border-amber-400/20 bg-black/35 p-5 backdrop-blur">
                  <div className="text-3xl font-black text-amber-200">18+</div>
                  <div className="mt-1 text-sm text-zinc-400">Zutritt</div>
                </div>
                <div className="rounded-3xl border border-amber-400/20 bg-black/35 p-5 backdrop-blur">
                  <div className="text-3xl font-black text-amber-200">02:00</div>
                  <div className="mt-1 text-sm text-zinc-400">geöffnet bis</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="erlebnis" className="bg-[#0d0a08] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="font-bold text-amber-300">Unser Angebot</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Unterhaltung in gepflegter Spielhallen-Atmosphäre.</h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-zinc-300">
              Spielhalle Vegas verbindet moderne Spielgeräte, lange Öffnungszeiten und ein seriöses Umfeld für erwachsene Besucher.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl transition hover:-translate-y-1 hover:border-amber-300/40">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black/40">{item.icon}</div>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-zinc-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="standorte" className="bg-white px-6 py-24 text-zinc-950">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold text-amber-700">Standorte & Öffnungszeiten</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Besuchen Sie Spielhalle Vegas in Ihrer Nähe.</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {locations.map((location) => (
              <div key={location.city} className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 shadow-sm">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-950">
                  <MapPin className="text-amber-300" size={28} />
                </div>
                <h3 className="text-3xl font-black">Spielhalle Vegas {location.city}</h3>
                <p className="mt-4 leading-7 text-zinc-700">{location.address}</p>
                <div className="mt-6 rounded-2xl bg-white p-5 leading-8 shadow-sm">
                  <p className="font-bold">Öffnungszeiten</p>
                  <p>Montag–Samstag: 08:00–02:00 Uhr</p>
                  <p>Sonn- und Feiertage: 11:00–02:00 Uhr</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gastronomie" className="bg-[#120806] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold text-amber-300">Automatenaufstellung</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Professionelle Automatenaufstellung für Gastronomiepartner.</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Neben dem Betrieb unserer Spielhallen stellen wir auch Geldspielgeräte in Gastronomien wie Bars, Kneipen und vergleichbaren Betrieben auf.
            </p>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              PG Pro Games GmbH steht für zuverlässige Betreuung, klare Absprachen und eine seriöse Zusammenarbeit mit bestehenden und zukünftigen Geschäftspartnern.
            </p>
            <a href="#kontakt" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-8 py-4 font-bold text-black shadow-xl shadow-amber-500/25 hover:bg-amber-300">
              Kooperation anfragen <ArrowRight size={18} />
            </a>
          </div>

          <div className="rounded-[2rem] border border-amber-400/15 bg-white/[0.04] p-8 shadow-2xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-400/15">
              <Wine className="text-amber-200" size={34} />
            </div>
            <div className="space-y-4">
              {[
                "Aufstellung in Bars, Kneipen und Gastronomiebetrieben",
                "Professionelle Betreuung und regelmäßige Abstimmung",
                "Seriöser Betrieb innerhalb gesetzlicher Vorgaben",
                "Direkter Ansprechpartner: Erdem Topal",
              ].map((item) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-black/25 p-5">
                  <CheckCircle className="mt-1 shrink-0 text-emerald-300" size={21} />
                  <span className="leading-7 text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="spielerschutz" className="bg-[#080808] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold text-amber-300">Spielerschutz</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Verantwortungsvolles Spiel steht bei uns im Mittelpunkt.</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Glücksspiel ist ein Angebot für Erwachsene und soll Unterhaltung bleiben. Deshalb achten wir auf Jugendschutz, klare Regeln und verantwortungsbewusstes Spielen.
            </p>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Wenn Sie das Gefühl haben, dass Ihr Spielverhalten problematisch wird, sprechen Sie unser Personal an oder wenden Sie sich an eine Beratungsstelle.
            </p>
          </div>

          <div className="rounded-[2rem] border border-amber-400/15 bg-white/[0.04] p-8 shadow-2xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-500/15">
              <HeartHandshake className="text-emerald-300" size={34} />
            </div>
            <div className="space-y-4">
              {protection.map((item) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-black/25 p-5">
                  <CheckCircle className="mt-1 shrink-0 text-emerald-300" size={21} />
                  <span className="leading-7 text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 rounded-2xl border border-red-400/20 bg-red-500/10 p-5 text-sm leading-7 text-red-100">
              Hinweis: Glücksspiel kann süchtig machen. Teilnahme nur ab 18 Jahren.
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="bg-[#100705] px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-amber-400/15 bg-white/[0.04] p-8 text-center shadow-2xl md:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-400/15">
            <Mail className="text-amber-200" size={30} />
          </div>
          <h2 className="text-4xl font-black tracking-tight">Kontakt</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
            Sie haben Fragen zu unseren Spielhallen, Standorten, Öffnungszeiten oder zur Automatenaufstellung? Kontaktieren Sie uns gerne.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4">
            <a href="mailto:info@pgprogames.de" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-8 py-4 font-bold text-black shadow-xl shadow-amber-500/25 hover:bg-amber-300">
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
          <p className="font-bold text-amber-700">Impressum</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Rechtliche Angaben</h2>
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
          <p className="font-bold text-amber-300">Datenschutz</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Datenschutzerklärung</h2>
          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 leading-8 text-zinc-300 shadow-2xl">
            <p>Der Schutz Ihrer persönlichen Daten ist uns wichtig. Personenbezogene Daten werden auf dieser Website nur im technisch notwendigen Umfang verarbeitet.</p>
            <p className="mt-6">Beim Besuch dieser Website können durch den Hostinganbieter automatisch technische Informationen wie Browsertyp, Betriebssystem, Uhrzeit des Zugriffs oder IP-Adresse verarbeitet werden.</p>
            <p className="mt-6">Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.</p>
            <p className="mt-6">Verantwortlich für die Datenverarbeitung:<br />PG Pro Games GmbH<br />Aulenbacher Straße 2<br />55774 Baumholder<br />E-Mail: info@pgprogames.de</p>
            <p className="mt-6">Diese Datenschutzerklärung stellt eine einfache DSGVO-Grundversion dar und kann bei Bedarf später erweitert werden.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-500">
        <div>© {new Date().getFullYear()} PG Pro Games GmbH. Alle Rechte vorbehalten.</div>
        <div className="mt-2">Glücksspiel kann süchtig machen. Teilnahme erst ab 18 Jahren.</div>
      </footer>
    </main>
  );
}
