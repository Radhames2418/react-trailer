import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import Login from './views/Login';
import Registro from './views/Registro';
import Inicio from './views/Inicio';
import Trailer from './views/Trailer';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Inicio />
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/registro',
                element: <Registro />
            }
        ]
    },
    {
        path:'/trailer/:pelicula',
        element: <Trailer />
    }
]);

export default router;