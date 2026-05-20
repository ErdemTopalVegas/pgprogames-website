import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata = {
  title: "Automatenaufstellung Rheinland-Pfalz | PG Pro Games GmbH",
  description:
    "PG Pro Games GmbH: Professionelle Automatenaufstellung für Gastronomien in Rheinland-Pfalz. Persönliche Betreuung, klare Absprachen und seriöser Betrieb.",
};

export default function Page() {
  return (
    <SeoLandingPage
      badge="Automatenaufstellung Rheinland-Pfalz"
      title="Automatenaufstellung in Rheinland-Pfalz."
      highlight="Seriös. Persönlich. Zuverlässig."
      description="PG Pro Games GmbH unterstützt Gastronomiebetriebe in Rheinland-Pfalz bei professioneller Automatenaufstellung mit persönlicher Betreuung und klaren Absprachen."
      mapQuery="Rheinland-Pfalz"
      ctaLabel="Kooperation anfragen"
      bullets={[
        "Automatenaufstellung für Gastronomien in Rheinland-Pfalz",
        "Persönliche Betreuung statt anonymer Massenabwicklung",
        "Klare Absprachen und zuverlässige Zusammenarbeit",
        "Betrieb innerhalb gesetzlicher Vorgaben",
        "Geeignet für Bars, Kneipen und Gastronomiebetriebe",
      ]}
    />
  );
}
