// export const runtime = "edge";

const WelcomeText = () => {
  return (
    <div className="p-6">
      <p className="mb-4 text-lg">
        Herzlich willkommen auf unserer Plattform für politische Transparenz im
        Mountainbike-Sport! Hier kannst du dich über die Haltungen und
        Positionen der Politikerinnen und Politiker aus dem Kanton Zug
        informieren und so herausfinden, wer die Interessen von uns
        Mountainbikerinnen und Mountainbikern am besten vertritt.
      </p>
      <p className="mb-4 text-lg">
        Die bevorstehenden Nationalratswahlen im Oktober 2023 bieten eine
        hervorragende Gelegenheit, uns aktiv in den politischen Diskurs
        einzubringen. Wir haben den Kandidatinnen und Kandidaten eine Reihe von
        Fragen zu Themen rund ums Mountainbiken gestellt. Ihre Antworten geben
        Aufschluss darüber, wie wichtig ihnen der Mountainbike-Sport und dessen
        Förderung ist.
      </p>
      <p className="mb-4 text-lg">
        Auf dieser Webseite findest du die Antworten aller teilnehmenden
        Politikerinnen und Politiker. Du kannst gezielt nach den Antworten
        bestimmter Personen suchen, dir aber auch eine Übersicht über alle
        Teilnehmenden verschaffen. Verschiedene Kennzahlen erleichtern dir zudem
        den Überblick.
      </p>
      <p className="mb-4 text-lg">
        Unser Ziel ist es, dir dabei zu helfen, eine informierte Entscheidung
        bei den kommenden Wahlen zu treffen. Nutze diese Informationen, um
        diejenigen zu unterstützen, die unsere Leidenschaft für das
        Mountainbiking teilen und bereit sind, sich für unsere Interessen
        einzusetzen.
      </p>
      <p className="text-lg">
        Vielen Dank für deine Unterstützung und dein Engagement für den
        Mountainbikesport. Jetzt ist die Zeit, unsere Stimme zu erheben und das
        Mountainbiken in unserem Kanton weiter voranzutreiben!
      </p>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <WelcomeText />
    </>
  );
}
