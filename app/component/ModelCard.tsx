import Link from "next/link";
import type { Model } from "../types/types";
import Image from "next/image";
import { FcLike } from "react-icons/fc";

export default function ModelCard({model}: {model:Model}) {
    return <Link href={`/3d-models/${model.id}`} className="border-1 rounded-md max-w-[300px] flex flex-col justify-between gap-2" >
        <Image src="/hero.png" className="border-0 rounded-t-md" alt={model.name} width={300} height={300}/>
        <div className="flex flex-col p-1">
            <div className="font-bold">{model.name}</div>
            <div className="text-sm">{model.description}</div>
            <div className="text-sm p-1 border-1 rounded-2xl bg-gray-200 w-fit">{model.category}</div>
            <div className="flex gap-1 items-center content-center"><FcLike />{model.likes}</div>
        </div>
    </Link>
}