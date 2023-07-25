import { type IKanton } from "~/model/model";

export async function getData(kanton: string): Promise<IKanton> {
  const res = await fetch(
    "https://igmtb.blob.core.windows.net/wahlen2023/" + kanton + ".json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json()) as IKanton;
}
