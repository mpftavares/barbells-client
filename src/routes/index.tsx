import { Navigate, createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout/index.js";
import { Login } from "../pages/Login.js";
import { Register } from "../pages/Register.js";
import { Dashboard } from "../pages/Dashboard.js";
import { ExercisesList } from "../pages/exercises/ExercisesList/index.js";
import { ExercisesForm } from "../pages/exercises/ExercisesForm.js";
import { WorkoutsList } from "../pages/workouts/WorkoutsList/index.js";
import { MetricsList } from "../pages/metrics/MetricsList/index.js";
import { Profile } from "../pages/Profile.js";
import { Logout } from "../pages/Logout.js";
import { PrivateRoute } from "./PrivateRoute.js";

export const router = createBrowserRouter([
    {
        path: 'barbells-client',
        element: <BaseLayout />,
        children: [
            { path: '', element: <Navigate to={"/barbells-client/login"} /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            { path: 'dashboard', element: <PrivateRoute element={<Dashboard />} /> },
            { path: 'exercises', element: <PrivateRoute element={<ExercisesList />} /> },
            { path: 'exercises/create', element: <PrivateRoute element={<ExercisesForm />} /> },
            { path: 'workouts', element: <PrivateRoute element={<WorkoutsList />} /> },
            { path: 'metrics', element: <PrivateRoute element={<MetricsList />} /> },
            { path: 'profile', element: <PrivateRoute element={<Profile />} /> },
            { path: 'logout', element: <Logout /> }
        ]
    }
])