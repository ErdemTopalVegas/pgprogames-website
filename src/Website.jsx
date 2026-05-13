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
    <main className="min-h-screen bg-[#
