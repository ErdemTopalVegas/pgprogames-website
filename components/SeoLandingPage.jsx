"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

const premiumCard =
  "rounded-[2rem] border border-amber-400/15 bg-gradient-to-br from-white/[0.08] via-white/[0.035] to-amber-950/10 shadow-2xl shadow-black/40";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.65, ease: "easeOut" },
};

export default function SeoLandingPage({
  badge,
  title,
  highlight,
  description,
  bullets,
  address,
  mapQuery,
  ctaLabel = "Kontakt aufnehmen",
  secondaryLabel = "Zur Startseite",
}) {
  return (
    <main className="min-h-screen bg-[#050403] text-white selection:bg-amber-300 selection:text-black">
      <section className="relative overflow-hidden border-b border-amber-400/10 px-6 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.22),transparent_32%),radial-gradient(circle_at_15%_35%,rgba(185,28,28,0.22),transparent_28%),linear-gradient(135deg,#050403_0%,#150f0a_48%,#030202_100%)]" />
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(251,191,36,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,.08)_1px,transparent_1px)] [background-size:58px_58px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="max-w-4xl">
            <a href="/" className="mb-10 inline-flex items-center gap-2 rounded-xl border border-amber-300/20 bg-black/35 px-5 py-3 text-sm font-bold text-amber-100 transition hover:bg-amber-300 hover:text-black">
              ← Zurück zur Startseite
            </a>

            <p className="mb-6 inline-flex rounded-full border border-amber-300/25 bg-black/40 px-5 py-2 text-sm font-black uppercase tracking-wide text-amber-200">
              {badge}
            </p>

            <h1 className="text-5xl font-black leading-[0.98] tracking-tight md:text-7xl">
              {title}
              <span className="block bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-700 bg-clip-text text-transparent">
                {highlight}
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
              {description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="/#kontakt" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 px-8 py-4 text-sm font-black uppercase tracking-wide text-black shadow-xl shadow-amber-500/20 transition hover:scale-[1.02]">
                {ctaLabel} <Mail size={18} />
              </a>
              <a href="/" className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-300/25 bg-black/35 px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-amber-300/10">
                {secondaryLabel} <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#080604] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <motion.div {...fadeUp} className={`${premiumCard} p-8 md:p-10`}>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl border border-amber-300/15 bg-amber-300/10">
              <ShieldCheck className="text-amber-300" size={30} />
            </div>
            <h2 className="text-3xl font-black md:text-4xl">Warum PG Pro Games?</h2>
            <div className="mt-8 space-y-4">
              {bullets.map((item) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-amber-300/10 bg-white/[0.04] p-5">
                  <CheckCircle className="mt-1 shrink-0 text-amber-300" size={21} />
                  <span className="leading-7 text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} className={`${premiumCard} p-8 md:p-10`}>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl border border-amber-300/15 bg-amber-300/10">
              <MapPin className="text-amber-300" size={30} />
            </div>
            <h2 className="text-3xl font-black">Informationen</h2>

            {address && (
              <div className="mt-6 rounded-2xl border border-amber-300/10 bg-black/35 p-6">
                <p className="font-black text-amber-200">Adresse</p>
                <p className="mt-2 leading-7 text-zinc-300">{address}</p>
              </div>
            )}

            <div className="mt-6 rounded-2xl border border-amber-300/10 bg-black/35 p-6">
              <p className="mb-2 flex items-center gap-2 font-black text-amber-200">
                <Clock size={18} /> Öffnungszeiten
              </p>
              <p className="text-zinc-300">Montag–Samstag: 08:00–02:00 Uhr</p>
              <p className="text-zinc-300">Sonn- und Feiertage: 11:00–02:00 Uhr</p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-300/10 bg-black/35 p-6">
              <p className="mb-2 flex items-center gap-2 font-black text-amber-200">
                <HeartHandshake size={18} /> Spielerschutz
              </p>
              <p className="leading-7 text-zinc-300">
                Teilnahme ausschließlich ab 18 Jahren. Glücksspiel kann süchtig machen.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-300/10 bg-black/35 p-6">
              <p className="mb-2 flex items-center gap-2 font-black text-amber-200">
                <Phone size={18} /> Kontakt
              </p>
              <p className="text-zinc-300">+49 176 22398057</p>
              <p className="text-zinc-300">info@pgprogames.de</p>
            </div>
          </motion.div>
        </div>
      </section>

      {mapQuery && (
        <section className="bg-[#0d0a07] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">Anfahrt & Standort</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
              Nutzen Sie die Karte für eine schnelle Orientierung und Routenplanung.
            </p>
            <div className="mt-10 overflow-hidden rounded-[2rem] border border-amber-300/10 bg-black/40">
              <iframe
                title={`Google Maps ${mapQuery}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
                className="h-[420px] w-full grayscale contrast-125 transition duration-700 hover:grayscale-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#080604] px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-amber-300/15 bg-gradient-to-br from-amber-300/10 to-black p-8 text-center shadow-2xl md:p-12">
          <h2 className="text-4xl font-black tracking-tight">Sie haben Fragen?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
            Kontaktieren Sie uns direkt. Wir helfen Ihnen gerne weiter.
          </p>
          <a href="/#kontakt" className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 px-8 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:scale-[1.02]">
            Kontakt aufnehmen <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
