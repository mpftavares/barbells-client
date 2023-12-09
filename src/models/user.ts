import { Exercise } from "./exercise.js"

export interface User {
    id: string
    name: string
    email: string
    exercises?: Exercise[]
}