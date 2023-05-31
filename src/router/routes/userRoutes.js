
import UserDashboard from '../../views/user/UserDashboard';

export const userRoutes = [
    {
        path: "/user/dashboard",
        element: <UserDashboard />,
        role: "user",
        status:"active"
    },
    
];

