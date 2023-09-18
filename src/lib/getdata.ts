import { type IKanton, ISample, QuestionAnswer } from "~/model/model";
import { type DataItem } from "~/components/plot/types";
import { env } from "~/env.mjs";
import { Dataset, RadarplotData } from "~/components/radar/types";

export async function getData(kanton: string): Promise<IKanton> {
  const res = await fetch(env.DATA_URL + kanton + ".json");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json()) as IKanton;
}

export async function getDataMds(kanton: string): Promise<DataItem[]> {
  const res = await fetch(env.DATA_URL + kanton + "-mds.json");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json()) as DataItem[];
}

export async function getQuestionAnswer(
  person: ISample | undefined
): Promise<QuestionAnswer[]> {
  const data = await getData("zg");
  return (
    person?.answers.map(
      (answer): QuestionAnswer => ({
        questionId: answer.questionId,
        questionLabel:
          data.questions.find((q) => q.id === answer.questionId)?.label ?? "",
        questionDisplay:
          data.questions.find((q) => q.id === answer.questionId)?.text ?? "",
        answerValue: answer.answer,
        answerDisplay:
          data.questions
            .find((q) => q.id === answer.questionId)
            ?.answers?.find((a) => a.value === answer.answer)?.text ?? "",
      })
    ) ?? []
  );
}

export async function getRadarData(
  person: ISample | undefined
): Promise<RadarplotData> {
  const qa = await getQuestionAnswer(person);

  return {
    labels: qa?.map((q) => q.questionLabel) ?? [],
    datasets: [
      {
        label: person?.name,
        data: qa?.map((item): number => item.answerValue) ?? [],
        fill: true,
        backgroundColor: "rgba(12,74,110, 0.2)",
        borderColor: "#0c4a6e",
        pointBackgroundColor: "#0c4a6e",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#0c4a6e",
      } as Dataset,
    ],
  };
}
