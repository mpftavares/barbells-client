import { PlusIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"

export function WorkoutsList() {

    return (
        <div className="min-h-full">
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl flex justify-between px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">Workouts</h1>
                    <span className="sm:ml-3">
                        <Link to="#"
                            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                            Create workout
                        </Link>
                    </span>
                </div>
            </header>
            <main>
                <div role="list" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 divide-y divide-gray-100">

                   <span>Coming soon... 🐌</span>

                </div>
            </main>
        </div>
    )
}