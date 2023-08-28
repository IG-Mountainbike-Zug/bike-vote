import Link from "next/link";
import { getData } from "~/lib/getdata";

type QuestionAnswer = {
  questionId: number;
  questionDisplay: string;
  answerValue: number;
  answerDisplay: string;
};

export default async function page({ params }: { params: { slug: string } }) {
  const data = await getData("zg");
  const person = data.samples.find((d) => d.slug === params.slug);
  const party = data.parties.find((p) => p.id === person?.partyId);

  const qa = person?.answers.map(
    (answer): QuestionAnswer => ({
      questionId: answer.questionId,
      questionDisplay:
        data.questions.find((q) => q.id === answer.questionId)?.text ?? "",
      answerValue: answer.answer,
      answerDisplay:
        data.questions
          .find((q) => q.id === answer.questionId)
          ?.answers?.find((a) => a.value === answer.answer)?.text ?? "",
    })
  );

  // const radarData =
  //   qa?.map(
  //     (item): DataItem => ({
  //       question: item.questionDisplay,
  //       value: item.answerValue,
  //     })
  //   ) ?? [];

  return (
    <>
      <div>
        <div className="px-4 sm:px-0">
          <Link
            href={`../profile`}
            className="text-sm text-sky-600 hover:text-sky-900 hover:underline"
          >
            &#10094;&nbsp;Alle anzeigen
          </Link>
          <h3 className="text-3xl font-semibold text-gray-900">
            {person?.name}
          </h3>
          {party?.color && (
            <p
              className="text-md mt-1 inline-flex max-w-2xl items-center rounded-lg px-2.5 py-0.5 font-medium leading-6 text-white"
              style={{ backgroundColor: party.color }}
            >
              {party?.name}
            </p>
          )}
          {person?.statement ? (
            <p className="my-8 max-w-4xl text-lg italic text-gray-800">
              {person?.statement}
            </p>
          ) : null}
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            {qa?.map((item) => (
              <div
                key={item.questionId}
                className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
              >
                <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">
                  {item.questionDisplay}
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-0">
                  {item.answerDisplay}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/*<RadarPlot name={person?.name ?? ""} data={radarData} />*/}
    </>
  );
}

export async function generateStaticParams() {
  const data = await getData("zg");

  return data.samples.map((x) => ({
    slug: x.slug,
  }));
}
