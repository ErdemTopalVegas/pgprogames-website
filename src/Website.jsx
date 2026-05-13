import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle,
  MapPin,
  Mail,
  ShieldCheck,
  Sparkles,
  Store,
  Trophy,
  Users,
  Wine,
} from "lucide-react";

export default function Website() {
  const services = [
    {
      icon: <Store className="text-amber-300" size={30} />,
      title: "Betrieb von Spielhallen",
      text: "Unter dem Namen Spielhalle Vegas betreiben wir moderne Spielhallen an unseren Standorten in Baumholder und Montabaur.",
    },
    {
      icon: <Wine className="text-red-300" size={30} />,
      title: "Automatenaufstellung in Gastronomien",
      text: "Wir kooperieren mit Bars, Kneipen und Gastronomiebetrieben und stellen passende Geldspielgeräte professionell vor Ort auf.",
    },
    {
      icon: <ShieldCheck className="text-emerald-300" size={30} />,
      title: "Seriöse Partnerschaften",
      text: "Zuverlässigkeit, klare Absprachen und ein verantwortungsvoller Umgang mit gesetzlichen Vorgaben stehen bei uns im Mittelpunkt.",
    },
  ];

  const benefits = [
    "Erfahrung im Betrieb von Spielhallen",
    "Standorte in Baumholder und Montabaur",
    "Kooperationen mit Gastronomiepartnern",
    "Professionelle Betreuung und klare Kommunikation",
    "Seriöses Auftreten in der Glücksspielbranche",
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

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <section className="relative overflow-hidden border-b border-amber-500/10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber-500/20 blur-[130px]" />
        <div className="absolute right-0 top-36 h-[380px] w-[380px] rounded-full bg-red-700/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-emerald-600/10 blur-[110px]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/30 bg-gradient-to-br from-amber-400 to-amber-700 shadow-lg shadow-amber-500/20">
                <Sparkles size={24} />
              </div>
              <div>
                <div className="text-lg font-black tracking-tight">PG Pro Games GmbH</div>
                <div className="text-xs uppercase tracking-[0.22em] text-amber-200/80">Spielhalle Vegas</div>
              </div>
            </div>

            <div className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
              <a href="#unternehmen" className="hover:text-amber-200">Unternehmen</a>
              <a href="#leistungen" className="hover:text-amber-200">Leistungen</a>
              <a href="#standorte" className="hover:text-amber-200">Standorte</a>
              <a href="#kontakt" className="hover:text-amber-200">Kontakt</a>
            </div>

            <a href="#kontakt" className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-black shadow-lg shadow-amber-500/20 hover:bg-amber-300">
              Partner werden
            </a>
          </nav>

          <div className="grid flex-1 items-center gap-14 py-20 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-2 text-sm text-amber-100">
                <Building2 size={16} /> Seriöser Partner in der Glücksspielbranche
              </p>

              <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
                PG Pro Games GmbH — Betreiber von Spielhalle Vegas.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">
                Wir betreiben Spielhallen unter dem Namen <strong className="text-amber-200">Spielhalle Vegas</strong> und bieten Gastronomiebetrieben professionelle Automatenaufstellung für Bars, Kneipen und ähnliche Standorte.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#kontakt" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-8 py-4 font-bold text-black shadow-xl shadow-amber-500/25 hover:bg-amber-300">
                  Geschäftsanfrage stellen <ArrowRight size={18} />
                </a>
                <a href="#leistungen" className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 font-bold text-zinc-200 hover:bg-white/10">
                  Leistungen ansehen
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="rounded-[2rem] border border-amber-400/15 bg-white/[0.04] p-5 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-amber-300 via-amber-600 to-red-900 p-1">
                <div className="rounded-[1.25rem] bg-[#0b0b0b] p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-500" />
                      <span className="h-3 w-3 rounded-full bg-amber-400" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    </div>
                    <div className="rounded-full bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-200">PG PRO GAMES</div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-400/15">
                        <Trophy className="text-amber-200" size={34} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black">Spielhalle Vegas</h3>
                        <p className="text-sm text-zinc-400">Baumholder & Montabaur</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-white/5 p-5">
                        <MapPin className="mb-4 text-red-300" />
                        <div className="text-sm text-zinc-400">Standorte</div>
                        <div className="text-xl font-black">2 Städte</div>
                      </div>
                      <div className="rounded-2xl bg-white/5 p-5">
                        <Users className="mb-4 text-emerald-300" />
                        <div className="text-sm text-zinc-400">Zielgruppe</div>
                        <div className="text-xl font-black">Partner</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="unternehmen" className="bg-[#101010] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold text-amber-300">Unser Unternehmen</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Verlässlicher Betreiber und Partner für Gastronomiebetriebe.</h2>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-zinc-300 shadow-2xl">
            <p className="text-lg leading-8">
              Die PG Pro Games GmbH ist in der Glücksspielbranche tätig und betreibt Spielhallen unter dem Namen Spielhalle Vegas. Zusätzlich arbeiten wir mit Gastronomiebetrieben zusammen und übernehmen die professionelle Aufstellung von Automaten in Bars, Kneipen und vergleichbaren Standorten.
            </p>
            <p className="mt-5 text-lg leading-8">
              Unsere Website richtet sich vor allem an bestehende und zukünftige Geschäftspartner, die sich über unser Unternehmen, unsere Standorte und mögliche Kooperationen informieren möchten.
            </p>
          </div>
        </div>
      </section>

      <section id="leistungen" className="bg-white px-6 py-24 text-zinc-950">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold text-amber-700">Leistungen</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Professionelle Lösungen für Spielhallen und Gastronomie.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Wir verbinden Branchenkenntnis mit zuverlässiger Betreuung — von eigenen Spielhallen bis zur Zusammenarbeit mit Gastronomiepartnern.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-950">{service.icon}</div>
                <h3 className="text-2xl font-black">{service.title}</h3>
                <p className="mt-4 leading-7 text-zinc-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="standorte" className="bg-[#080808] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold text-amber-300">Standorte</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Spielhalle Vegas in Baumholder und Montabaur.</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {locations.map((location) => (
              <div key={location.city} className="rounded-[2rem] border border-amber-400/15 bg-white/[0.04] p-8 shadow-2xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/15">
                  <MapPin className="text-amber-200" size={28} />
                </div>
                <h3 className="text-3xl font-black">Spielhalle Vegas {location.city}</h3>
                <p className="mt-4 leading-7 text-zinc-300">
                  Adresse: {location.address}<br /><br />
                  Öffnungszeiten:<br />
                  Montag–Samstag: 08:00–02:00 Uhr<br />
                  Sonn- und Feiertage: 11:00–02:00 Uhr
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 text-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold text-amber-700">Warum PG Pro Games?</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Eine Partnerschaft mit klarer Struktur.</h2>
          </div>
          <div className="grid gap-4">
            {benefits.map((item) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <CheckCircle className="shrink-0 text-emerald-600" size={22} />
                <span className="font-semibold text-zinc-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="bg-[#101010] px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-amber-400/15 bg-white/[0.04] p-8 text-center shadow-2xl md:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-400/15">
            <Mail className="text-amber-200" size={30} />
          </div>
          <h2 className="text-4xl font-black tracking-tight">Kontakt für Geschäftspartner</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
            Sie möchten mehr über PG Pro Games GmbH erfahren oder interessieren sich für eine Kooperation im Bereich Automatenaufstellung? Kontaktieren Sie uns gerne.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4">
            <a href="mailto:info@pgprogames.de" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-8 py-4 font-bold text-black shadow-xl shadow-amber-500/25 hover:bg-amber-300">
              info@pgprogames.de <ArrowRight size={18} />
            </a>
            <div className="text-zinc-400">Ansprechpartner: Erdem Topal · et@pgprogames.de · 017622398057</div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 text-zinc-950">
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

      <section className="bg-[#0b0b0b] px-6 py-24">
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
        <div className="mt-2">Hinweis: Glücksspiel kann süchtig machen. Teilnahme erst ab 18 Jahren.</div>
      </footer>
    </main>
  );
}
