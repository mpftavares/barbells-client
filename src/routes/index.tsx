import { createBrowserRouter, Navigate } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout/index.js";
import { Dashboard } from "../pages/Dashboard.js";
import { ExercisesForm } from "../pages/exercises/ExercisesForm.js";
import { ExercisesList } from "../pages/exercises/ExercisesList/index.js";
import { Login } from "../pages/Login.js";
import { Logout } from "../pages/Logout.js";
import { MetricsList } from "../pages/metrics/MetricsList/index.js";
import { Profile } from "../pages/Profile.js";
import { Register } from "../pages/Register.js";
import { WorkoutsList } from "../pages/workouts/WorkoutsList/index.js";

export const router = createBrowserRouter([
    {
        path: '',
        element: <BaseLayout />,
        children: [
            { path: '', element: <Navigate to="/dashboard" /> },
            { path: 'dashboard', element: <Dashboard /> },
            {
                path: 'exercises', element: <ExercisesList />
            },
            {
                path: 'exercises/create', element: <ExercisesForm />
            },
            {
                path: 'workouts', element: <WorkoutsList />
            },
            {
                path: 'metrics', element: <MetricsList />
            },
            {
                path: 'profile', element: <Profile />
            },
            {
                path: 'login', element: <Login />
            },
            {
                path: 'register', element: <Register />
            },
            {
                path: 'logout', element: <Logout />, 
            }
        ]
    }
])