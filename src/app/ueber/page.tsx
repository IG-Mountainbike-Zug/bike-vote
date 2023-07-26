export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <div className="mb-5 border-b border-gray-200 pb-5">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          Über die Plattform
        </h1>
      </div>
      <p className="mb-4">
        Diese Plattform wurde mit der Absicht erstellt, eine neutrale
        Informationsquelle für die Wählerinnen im Kanton Zug zu sein,
        insbesondere für diejenigen, die sich für Mountainbiking und dessen
        Einfluss auf die lokale Politik interessieren. Mit den anstehenden
        Nationalratswahlen im Oktober 2023 wollten wir einen Raum schaffen, der
        einen Überblick über die Positionen und Meinungen der verschiedenen
        Kandidatinnen zu Mountainbike-spezifischen Themen bietet.
      </p>

      <p className="mb-4">
        Im Vorfeld der Wahlen haben wir einen Fragebogen entwickelt und diesen
        an alle Politiker*innen im Kanton Zug gesendet. Die Beteiligung war
        freiwillig und die Antworten variieren von Ja/Nein-Antworten zu
        detaillierteren Statements. Die gesammelten Informationen haben wir
        ausgewertet und für dich auf dieser Webseite verfügbar gemacht.
      </p>

      <p className="mb-4">
        Unsere Hoffnung ist, dass diese Plattform dir hilft, informierte
        Entscheidungen bei den bevorstehenden Wahlen zu treffen. Die Darstellung
        der verschiedenen Positionen und Meinungen kann dir dabei helfen, die
        Politiker*innen zu identifizieren, die deine Interessen am besten
        vertreten.
      </p>

      <p className="mb-4">
        Bitte beachte, dass wir bemüht sind, alle Informationen so objektiv und
        unparteiisch wie möglich darzustellen. Solltest du Fragen oder
        Anregungen haben, zögere bitte nicht, uns über die 'Kontakt'-Seite zu
        erreichen. Viel Spass beim Erkunden der Plattform!
      </p>
    </>
  );
}
