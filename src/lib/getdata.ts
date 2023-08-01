import { type IKanton } from "~/model/model";
import { type DataItem } from "~/components/plot/types";
import { env } from "~/env.mjs";

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
