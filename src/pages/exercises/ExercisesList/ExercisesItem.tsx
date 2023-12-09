import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import { api } from "../../../lib/axios.js";
import { Exercise } from "../../../models/exercise.js"
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter.js"
interface ExerciseItemProps {
    exercise: Exercise
}

export function ExercisesItem({ exercise }: ExerciseItemProps) {

    async function handleDelete() {
        await api.delete(`/exercises/${exercise.id}`)
        window.location.reload();
    }

    const isDisabled = exercise.userId === null;

    return (
        <li key={exercise.id} className="flex justify-between gap-x-6 py-5 relative">
            <div className="min-w-0 flex-auto">
                <p className=" text-lg leading-6 text-gray-900">
                    {capitalizeFirstLetter(exercise.name)}
                </p>
                <div className="flex items-end text-xs leading-6 text-gray-900">
                    <p>{exercise.equipment}</p>
                    {exercise.unilateral && (
                        <p className="ml-2 text-xs leading-6 text-gray-500">unilateral</p>
                    )}
                </div>
            </div>
            <div className="shrink-0 sm:flex sm:items-end">
                <span className="ml-1 sm:block flex">
                    <button
                        type="button" disabled={isDisabled}
                        className={`inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${isDisabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-100'}`}
                        style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}


                    >
                        <PencilIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </button>
                </span>

                <span className="ml-1 sm:block flex">
                    <button
                        type="button" disabled={isDisabled} onClick={handleDelete}

                        className={`inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${isDisabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-100'}`}
                        style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}


                    >
                        <TrashIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </button>
                </span>
            </div>
        </li>
    )
}