import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { api } from "../lib/axios.js"


const createUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6)
})

type CreateUserData = z.infer<typeof createUserSchema>

export function Register() {

    const { handleSubmit, register } = useForm<CreateUserData>({
        resolver: zodResolver(createUserSchema)
    })

    async function createUser(createUserSchema: CreateUserData) {

        await api.post('/register', createUserSchema)

    }

    return <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl leading-9 tracking-tight text-indigo-900">Create a new account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit(createUser)}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-indigo-900">Name</label>
                    <div className="mt-2">
                        <input id="name" type="text" {...register('name')} required className="block w-full rounded-md border-0 p-1.5 text-indigo-900 shadow-sm ring-1 ring-inset ring-indigo-300 placeholder-indigo-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-indigo-900">Email</label>
                    <div className="mt-2">
                        <input id="email" type="email" {...register('email')} required className="block w-full rounded-md border-0 p-1.5 text-indigo-900 shadow-sm ring-1 ring-inset ring-indigo-300 placeholder-indigo-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-indigo-900">Password</label>
                    </div>
                    <div className="mt-2">
                        <input id="password" type="password" {...register('password')} required className="block w-full rounded-md border-0 p-1.5 text-indigo-900 shadow-sm ring-1 ring-inset ring-indigo-300 placeholder-indigo-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>

            </form>
        </div>
    </div>
}