import type { ModelDetailPageProps } from "@/types/types";
import {getModelById} from "@/app/lib/models";
import Image from "next/image";
import { FcLike } from "react-icons/fc";

export default async function FulllModel({params}: ModelDetailPageProps) {
    const {id} = await params
    const model = await getModelById(id);

    return <div className="container mx-auto py-10"> 
        <div className="lg:flex flex-row">
            <div className="flex justify-center">
                <Image src="/hero.png" alt={model.name} width={500} height={500} className="lg:w-lg w-sm"/>
            </div>

            <div className="flex flex-col lg:mt-10 gap-5 lg:p-20 p-10">
                <div className="flex gap-1 items-center content-center"> <FcLike />{model.likes}</div>
                <div className="font-bold text-4xl">{model.name}</div>
                <div className="text-sm p-1 border-1 rounded-2xl w-fit">{model.category}</div>
                <div className="text-sm">{model.description}</div>
                <div className="">{model.dateAdded}</div>
            </div>
        </div>
    </div>;
}