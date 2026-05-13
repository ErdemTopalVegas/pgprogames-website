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
  Trophy,
  UserCheck,
} from "lucide-react";

export default function Website() {
  const locations = [
    { city: "Baumholder", address: "Aulenbacher Straße 2, 55774 Baumholder" },
    { city: "Montabaur", address: "Alleestraße 35, 56410 Montabaur" },
  ];

  const cards = [
    {
      icon: <Dice5 className="text-red-300" size={30} />,
      title: "Moderne Geldspielgeräte",
      text: "Spielhalle Vegas bietet gepflegte Räumlichkeiten, moderne Unterhaltung und eine angenehme Atmosphäre.",
    },
    {
      icon: <Clock className="text-amber-300" size={30} />,
      title: "Lange Öffnungszeiten",
      text: "Montag bis Samstag 08:00–02:00 Uhr, sonn- und feiertags 11:00–02:00 Uhr.",
    },
    {
      icon: <ShieldCheck className="text-emerald-300" size={30} />,
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
    <main className="min-h-screen bg-[#050201] text-white">
      <section className="relative overflow-hidden border-b border-amber-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.22),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(185,28,28,0.25),transparent_32%),linear-gradient(135deg,#080201_0%,#170604_48%,#030303_100%)]" />
        <div className="absolute left-8 top-28 h-72 w-72 rounded-full bg-red-700/20 blur-[110px]" />
        <div className="absolute bottom-0 right-16 h-96 w-96 rounded-full bg-amber-500/20 blur-[120px]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8">
          <nav className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/40 bg-gradient-to-br from-amber-300 via-amber-600 to-red-800 shadow-lg shadow-amber-500/25">
                <Dice5 size={25} />
              </div>
              <div>
                <div className="text-lg font-black tracking-tight">Spielhalle Vegas</div>
                <div className="text-xs uppercase tracking-[0.22em] text-amber-200/80">PG Pro Games GmbH</div>
              </div>
            </div>

            <div className="hidden items-center gap-7 text-sm text-zinc-300 lg:flex">
              <a href="#erlebnis" className="hover:text-amber-200">Erlebnis</a>
              <a href="#standorte" className="hover:text-amber-200">Standorte</a>
              <a href="#spielerschutz" className="hover:text-amber-200">Spielerschutz</a>
              <a href="#kontakt" className="hover:text-amber-200">Kontakt</a>
              <a href="#impressum" className="hover:text-amber-200">Impressum</a>
            </div>

            <a href="#standorte" className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-black shadow-lg shadow-amber-500/25 hover:bg-amber-300">
              Standorte
            </a>
          </nav>

          <div className="grid flex-1 items-center gap-14 py-20 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-black/30 px-4 py-2 text-sm text-amber-100 backdrop-blur">
                <Sparkles size={16} /> Willkommen in der Spielhalle Vegas
              </p>

              <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
                Spielhalle Vegas — moderne Unterhaltung in Baumholder & Montabaur.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">
                Erleben Sie gepflegte Spielhallen mit angenehmer Casino-Atmosphäre, modernen Geldspielgeräten und persönlichem Service.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#standorte" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-8 py-4 font-bold text-black shadow-xl shadow-amber-500/25 hover:bg-amber-300">
                  Standorte ansehen <ArrowRight size={18} />
                </a>
                <a href="#spielerschutz" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/20 px-8 py-4 font-bold text-zinc-200 hover:bg-white/10">
                  Spielerschutz
                </a>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div className="rounded-3xl border border-amber-400/20 bg-black/35 p-4 backdrop-blur">
                  <div className="text-2xl font-black text-amber-200">2</div>
                  <div className="text-xs text-zinc-400">Standorte</div>
                </div>
                <div className="rounded-3xl border border-amber-400/20 bg-black/35 p-4 backdrop-blur">
                  <div className="text-2xl font-black text-amber-200">18+</div>
                  <div className="text-xs text-zinc-400">Zutritt</div>
                </div>
                <div className="rounded-3xl border border-amber-400/20 bg-black/35 p-4 backdrop-blur">
                  <div className="text-2xl font-black text-amber-200">02:00</div>
                  <div className="text-xs text-zinc-400">geöffnet bis</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="rounded-[2rem] border border-amber-400/20 bg-black/40 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-yellow-300 via-amber-600 to-red-900 p-1 shadow-2xl shadow-amber-900/30">
                <div className="rounded-[1.25rem] bg-[#0b0503] p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-500" />
                      <span className="h-3 w-3 rounded-full bg-amber-400" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    </div>
                    <div className="rounded-full bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-200">VEGAS</div>
                  </div>

                  <div className="rounded-3xl border border-amber-400/15 bg-gradient-to-br from-white/10 to-white/[0.03] p-7">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-red-600/20">
                        <Trophy className="text-amber-200" size={34} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black">Casino-Atmosphäre</h3>
                        <p className="text-sm text-zinc-400">seriös · modern · gepflegt</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 text-center">
                      {["VEGAS", "18+", "OPEN"].map((item) => (
                        <div key={item} className="rounded-2xl border border-amber-400/15 bg-black/35 p-4">
                          <Star className="mx-auto mb-3 text-amber-300" size={22} />
                          <div className="text-sm font-black text-amber-100">{item}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-2xl bg-black/35 p-5">
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="text-zinc-300">Unterhaltung & Verantwortung</span>
                        <span className="font-bold text-amber-200">100%</span>
                      </div>
                      <div className="h-3 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-full rounded-full bg-gradient-to-r from-red-600 via-amber-400 to-emerald-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="erlebnis" className="bg-[#100705] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold text-amber-300">Unser Angebot</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Moderne Unterhaltung in stilvoller Spielhallen-Atmosphäre.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Spielhalle Vegas steht für ein gepflegtes Umfeld, freundlichen Service und verantwortungsvolles Glücksspiel an zwei Standorten.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {cards.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-amber-400/15 bg-white/[0.04] p-8 shadow-2xl transition hover:-translate-y-1 hover:border-amber-300/40">
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
            Sie haben Fragen zu unseren Spielhallen, Standorten oder Öffnungszeiten? Kontaktieren Sie uns gerne.
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
