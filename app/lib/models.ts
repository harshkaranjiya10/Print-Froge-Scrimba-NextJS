import modelsDats from "../data/models.json";
import type { Model } from "../types/types";

export async function getAllModels() {
    return modelsDats;    
}

export async function getModelById(id: string | number): Promise<Model> {
  const foundModel = modelsDats.find(
    (model: Model) => model.id.toString() === id.toString()
  )
  if (!foundModel) {
    throw new Error(`Model with id ${id} not found`)
  }
  return foundModel
}