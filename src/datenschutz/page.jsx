export const metadata = {
  title: "Datenschutz | PG Pro Games GmbH",
  description: "Datenschutzerklärung der PG Pro Games GmbH.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0b0907] px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="mb-10 inline-flex rounded-xl border border-amber-300/20 px-5 py-3 font-bold text-amber-100 transition hover:bg-amber-300 hover:text-black">
          ← Zur Startseite
        </a>
        <p className="font-black uppercase tracking-[0.22em] text-amber-300">Datenschutz</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Datenschutzerklärung</h1>
        <div className="mt-10 rounded-[2rem] border border-amber-300/10 bg-white/[0.04] p-8 leading-8 text-zinc-300 shadow-2xl">
          <h2 className="text-2xl font-black text-white">1. Datenschutz auf einen Blick</h2>
          <p className="mt-5">Der Schutz Ihrer persönlichen Daten ist uns wichtig. Nachfolgend informieren wir Sie darüber, welche Daten beim Besuch dieser Website verarbeitet werden und zu welchem Zweck dies geschieht.</p>

          <h2 className="mt-12 text-2xl font-black text-white">2. Verantwortlicher</h2>
          <p className="mt-5">PG Pro Games GmbH<br />Aulenbacher Straße 2<br />55774 Baumholder<br />E-Mail: info@pgprogames.de<br />Telefon: +49 176 22398057</p>

          <h2 className="mt-12 text-2xl font-black text-white">3. Hosting</h2>
          <p className="mt-5">Diese Website wird bei einem externen Hostinganbieter betrieben. Personenbezogene Daten, die auf dieser Website erfasst werden, können auf den Servern des Hostinganbieters gespeichert werden.</p>

          <h2 className="mt-12 text-2xl font-black text-white">4. Google Maps</h2>
          <p className="mt-5">Google Maps wird auf dieser Website erst nach Ihrer ausdrücklichen Zustimmung geladen. Ohne Zustimmung wird keine Google-Karte eingebunden. Beim Laden der Karte können personenbezogene Daten, insbesondere Ihre IP-Adresse, an Google übertragen werden.</p>

          <h2 className="mt-12 text-2xl font-black text-white">5. Kontaktaufnahme</h2>
          <p className="mt-5">Wenn Sie uns per E-Mail oder telefonisch kontaktieren, werden Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.</p>

          <h2 className="mt-12 text-2xl font-black text-white">6. SSL- bzw. TLS-Verschlüsselung</h2>
          <p className="mt-5">Diese Website nutzt aus Sicherheitsgründen und zum Schutz vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.</p>

          <h2 className="mt-12 text-2xl font-black text-white">7. Ihre Rechte</h2>
          <p className="mt-5">Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.</p>

          <h2 className="mt-12 text-2xl font-black text-white">8. Beschwerderecht</h2>
          <p className="mt-5">Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde zu.</p>
        </div>
      </div>
    </main>
  );
}
