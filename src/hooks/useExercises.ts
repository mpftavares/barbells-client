import { Exercise } from "../models/exercise.js";
import { useFetch } from "./useFetch.js";

export function useExercises() {
    return useFetch<{ exercises: Exercise[] }>('/exercises/all')
}