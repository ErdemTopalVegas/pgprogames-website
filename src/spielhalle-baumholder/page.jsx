import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata = {
  title: "Spielhalle Baumholder | Spielhalle Vegas | PG Pro Games GmbH",
  description:
    "Spielhalle Vegas Baumholder: Moderne Spielhalle in Baumholder mit gepflegter Atmosphäre, freundlichem Service und verantwortungsvollem Spielbetrieb ab 18 Jahren.",
};

export default function Page() {
  return (
    <SeoLandingPage
      badge="Spielhalle Baumholder"
      title="Spielhalle in Baumholder."
      highlight="Modern. Gepflegt. Seriös."
      description="Die Spielhalle Vegas in Baumholder bietet erwachsenen Gästen ein stilvolles Umfeld, moderne Ausstattung und eine verantwortungsbewusste Atmosphäre."
      address="Aulenbacher Straße 2, 55774 Baumholder"
      mapQuery="Aulenbacher Straße 2, 55774 Baumholder"
      bullets={[
        "Moderner Spielhallenbetrieb in Baumholder",
        "Gepflegte Räumlichkeiten mit hochwertigem Ambiente",
        "Freundlicher Service und klare Abläufe",
        "Zutritt und Spielteilnahme ausschließlich ab 18 Jahren",
        "Verantwortungsvolles Spielen und Jugendschutz im Mittelpunkt",
      ]}
    />
  );
}
