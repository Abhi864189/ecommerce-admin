
import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../container/Login/Login";
import DashBoard from "../container/DashBoard/DashBoard";

const Router = createBrowserRouter([
    { path: '/', element: <Navigate to='/login' replace /> },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/dash-board',
        element: <DashBoard />
    }
])
export default Router;