import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata = {
  title: "Spielhalle Montabaur | Spielhalle Vegas | PG Pro Games GmbH",
  description:
    "Spielhalle Vegas Montabaur: Stilvolle Spielhalle in Montabaur mit moderner Ausstattung, angenehmem Ambiente und verantwortungsvollem Spielbetrieb ab 18 Jahren.",
};

export default function Page() {
  return (
    <SeoLandingPage
      badge="Spielhalle Montabaur"
      title="Spielhalle in Montabaur."
      highlight="Stilvoll. Modern. Verantwortungsbewusst."
      description="Die Spielhalle Vegas in Montabaur steht für eine moderne, gepflegte und seriöse Spielumgebung für erwachsene Gäste."
      address="Alleestraße 35, 56410 Montabaur"
      mapQuery="Alleestraße 35, 56410 Montabaur"
      bullets={[
        "Moderner Standort in Montabaur",
        "Stilvolles Ambiente für erwachsene Gäste",
        "Klare Regeln, Jugendschutz und Spielerschutz",
        "Freundlicher Service vor Ort",
        "Gepflegte Räume und seriöser Betrieb",
      ]}
    />
  );
}
