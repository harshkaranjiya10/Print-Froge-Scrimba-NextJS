import { getAllModels } from "../lib/models";
import {Model} from "../types/types";
import ModelCard from "../component/ModelCard";
export default async function ThreeDModelsPage() {
    const models = await getAllModels();
    return <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5" >
        {
            models.map((model: Model) => (
                <ModelCard key={model.id} model={model} />
            ))
        }
    </div>;
}