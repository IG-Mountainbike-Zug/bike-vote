import { type IKanton } from "~/model/model";
import { type DataItem } from "~/components/plot/types";
import { env } from "~/env.mjs";

const baseUrl: string = env.DATA_URL as string;

export async function getData(kanton: string): Promise<IKanton> {
  const res = await fetch(baseUrl + kanton + ".json");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json()) as IKanton;
}

export async function getDataMds(kanton: string): Promise<DataItem[]> {
  const res = await fetch(baseUrl + kanton + "-mds.json");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json()) as DataItem[];
}
