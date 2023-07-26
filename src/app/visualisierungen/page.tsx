import { Scatterplot } from "~/components/plot/scatterplot";
import { data } from "~/components/plot/data";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <div className="border-b border-gray-200 pb-5">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Job Postings
        </h3>
        <p className="mt-2 max-w-4xl text-sm text-gray-500">
          Workcation is a property rental website. Etiam ullamcorper massa
          viverra consequat, consectetur id nulla tempus. Fringilla egestas
          justo massa purus sagittis malesuada.
        </p>
      </div>

      <Scatterplot data={data} width={800} height={600} />
    </>
  );
}
