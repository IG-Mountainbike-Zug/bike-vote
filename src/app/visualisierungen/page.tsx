import { Scatterplot } from "~/components/plot/scatterplot";
import { data } from "~/components/plot/data";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <div className="border-b border-gray-200 pb-5">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          Visualisierungen
        </h1>
        <p className="mt-2 max-w-4xl text-sm text-gray-500">
          Hier kannst du auf einen Blick erkennen, wo Gemeinsamkeiten und
          Unterschiede in den Ansichten der Politiker*innen liegen. Unsere
          Visualisierungen helfen dir, die Vielfalt der Positionen zum Thema
          Mountainbiking im Kanton Zug besser zu verstehen und zu
          interpretieren. Tauche ein in die Welt der Daten und entdecke neue
          Perspektiven!
        </p>
      </div>

      <Scatterplot data={data} width={800} height={600} />
    </>
  );
}
