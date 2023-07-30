import { type IKanton } from "~/model/model";
import { type DataItem } from "~/components/plot/types";

export async function getData(kanton: string): Promise<IKanton> {
  const res = await fetch(
    "https://igmtb.blob.core.windows.net/wahlen2023/" + kanton + ".json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json()) as IKanton;
}

export async function getDataMds(kanton: string): Promise<DataItem[]> {
  const res = await fetch(
    "https://igmtb.blob.core.windows.net/wahlen2023/" + kanton + "-mds.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json()) as DataItem[];
}
