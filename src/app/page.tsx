import Image from "next/image";
import {type IKanton} from "~/model/model";

export const runtime = 'edge';

async function getData(kanton: string): Promise<IKanton> {
    const res = await fetch('https://igmtb.blob.core.windows.net/wahlen2023/' + kanton + '.json')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return (await res.json()) as IKanton;
}

export default async function Home() {
    const data = await getData('zg');
    console.log(data);

    return (
        <>
            <div className="text-2xl">Hello</div>
        </>
    );
}
