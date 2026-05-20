export const metadata = {
  title: "Impressum | PG Pro Games GmbH",
  description: "Impressum der PG Pro Games GmbH.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f7f1e6] px-6 py-24 text-zinc-950">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="mb-10 inline-flex rounded-xl border border-amber-700/20 px-5 py-3 font-bold text-amber-800 transition hover:bg-amber-200">
          ← Zur Startseite
        </a>
        <p className="font-black uppercase tracking-[0.22em] text-amber-700">Impressum</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Rechtliche Angaben</h1>
        <div className="mt-10 rounded-[2rem] border border-amber-200 bg-white/80 p-8 leading-8 shadow-sm">
          <p><strong>PG Pro Games GmbH</strong></p>
          <p>Aulenbacher Straße 2<br />55774 Baumholder</p>
          <p className="mt-6"><strong>Vertreten durch:</strong><br />Geschäftsführer Erdem Topal</p>
          <p className="mt-6"><strong>Kontakt</strong><br />Telefon: +49 176 22398057<br />E-Mail: info@pgprogames.de</p>
          <p className="mt-6"><strong>Registereintrag</strong><br />Amtsgericht Bad Kreuznach<br />HRB 23504</p>
        </div>
      </div>
    </main>
  );
}
