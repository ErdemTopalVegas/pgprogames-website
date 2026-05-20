import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata = {
  title: "Automatenaufstellung Hessen | PG Pro Games GmbH",
  description:
    "PG Pro Games GmbH: Professionelle Automatenaufstellung für Bars, Kneipen und Gastronomiebetriebe in Hessen. Persönliche Betreuung und seriöser Betrieb.",
};

export default function Page() {
  return (
    <SeoLandingPage
      badge="Automatenaufstellung Hessen"
      title="Automatenaufstellung in Hessen."
      highlight="Professionell für Gastronomien."
      description="PG Pro Games GmbH ist Ihr Ansprechpartner für professionelle Automatenaufstellung in Hessen. Wir betreuen Gastronomiebetriebe mit klaren Absprachen, persönlichem Service und seriösem Betrieb."
      mapQuery="Hessen"
      ctaLabel="Kooperation anfragen"
      bullets={[
        "Automatenaufstellung für Bars, Kneipen und Gastronomiebetriebe",
        "Persönliche Betreuung und klare Kommunikation",
        "Seriöser Betrieb innerhalb gesetzlicher Vorgaben",
        "Zuverlässiger Ansprechpartner für Ihre Gastronomie",
        "Interessant für Gastronomiebetriebe in Hessen",
      ]}
    />
  );
}
