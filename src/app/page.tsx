"use client";
import { SearchContext } from "./search-provider";
import { useContext } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const WelcomeText = () => {
  const { search } = useContext(SearchContext);
  return (
    <>
      <h1 className="mb-4 text-3xl">
        Mountainbike & Politik: Dein Wahlleitfaden für den Kanton Zug
      </h1>
      <p className="mb-4">
        Herzlich willkommen auf unserer Plattform zur Unterstützung einer
        besseren Bikepolitik im Kanton Zug. Vor den National- und
        Ständeratswahlen 2023 wollten wir Licht ins Dunkel bringen und die
        Positionen der Kandidat*innen zum Thema Mountainbiking transparent
        machen.
      </p>
      <p className="mb-4">
        Unser Ziel: Dir und den etwa 22&#39;000 aktiven Mountainbikerinnen im
        Kanton Zug, sowie allen weiteren interessierten Personen, eine
        Entscheidungshilfe zu bieten. Welche Kandidatinnen könnten Deine
        Interessen als Mountainbikerin am besten auf nationaler Ebene vertreten?
        Mit dieser Plattform ermöglichen wir Dir, die Positionen der
        Kandidatinnen zu vergleichen und so eine informierte Wahlentscheidung zu
        treffen.
      </p>
      <p className="mb-4">
        Die hier präsentierten Informationen basieren auf den Antworten, die wir
        auf unseren Online-Fragebogen mit acht Fragen von den Kandidat*innen
        erhalten haben. Die Teilnahme war freiwillig und die Ergebnisse wurden
        Ende September 2023 veröffentlicht.
      </p>
      <p className="mb-4">
        Wir glauben an den Mountainbike-Sport als einen etablierten und
        zunehmend beliebteren Breitensport. Unser Ziel ist es, den
        Mountainbike-Sport im Kanton Zug und in der gesamten Schweiz zu stärken
        und zu fördern. Durch eine transparente und gut informierte
        Wahlentscheidung kannst auch Du dazu beitragen.
      </p>
      <p className="mb-4">
        Schau Dich auf unserer Plattform um, lerne die Positionen der
        Kandidat*innen kennen und triff so die beste Wahlentscheidung. Danke für
        Dein Interesse und Deine aktive Teilnahme.
      </p>
      <Link href={`/profile`}>
        <button
          type="button"
          className="inline-flex items-center gap-x-2 rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          Zu den Kandidat*innen
          <ArrowRightIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
        </button>
      </Link>
    </>
  );
};

export default function Home() {
  return (
    <>
      <WelcomeText />
    </>
  );
}
