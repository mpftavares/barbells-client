import { User } from "./user.js"

export interface Exercise {
    id: number
    name: string
    equipment: string
    unilateral: boolean
    userId?: User
}