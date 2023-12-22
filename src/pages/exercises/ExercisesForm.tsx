import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"
import { api } from "../../lib/axios.js"

const createExerciseSchema = z.object({
    name: z.string(),
    equipment: z.enum([
        'assisted',
        'barbell',
        'bodyweight',
        'cable',
        'dumbbells',
        'machine',
    ]),
    unilateral: z.boolean(),
})

type CreateExerciseData = z.infer<typeof createExerciseSchema>

export function ExercisesForm() {

    const navigate = useNavigate()

    const { handleSubmit, register } = useForm<CreateExerciseData>({
        resolver: zodResolver(createExerciseSchema)
    })

    async function createExercise(createExerciseSchema: CreateExerciseData) {

        await api.post('/exercises', createExerciseSchema)
        return navigate('/barbells-client/exercises')
    }

    return (
        <div className="min-h-full">
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl flex justify-between px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">Exercises</h1>

                </div>
            </header>
            <main>
                <div role="list" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 divide-y divide-gray-100">

                    <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit(createExercise)}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-indigo-900">Name</label>
                            <div className="mt-2">
                                <input id="name" type="text" {...register('name')} required className="block w-full rounded-md border-0 p-1.5 text-indigo-900 shadow-sm ring-1 ring-inset ring-indigo-300 placeholder-indigo-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="equipment" className="block text-sm font-medium leading-6 text-indigo-900">Equipment</label>
                            <div className="mt-2">
                                <select id="equipment" {...register('equipment')} className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                    <option value="">Select an option</option>
                                    <option value="assisted">assisted</option>
                                    <option value="barbell">barbell</option>
                                    <option value="bodyweight">bodyweight</option>
                                    <option value="cable">cable</option>
                                    <option value="dumbbells">dumbbells</option>
                                    <option value="machine ">machine</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center ">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-indigo-900">Unilateral</label> <input type="checkbox" {...register('unilateral')} className="ml-2" />
                            </div>

                        </div>

                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create exercise</button>

                    </form>

                </div>
            </main>
        </div>
    )

}