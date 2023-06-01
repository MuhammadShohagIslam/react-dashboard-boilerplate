import { lazy } from "react";

const SuperAdminDashboard = lazy(() =>
    import("../../views/superAdmin/SuperAdminDashboard")
);
export const userRoutes = [
    {
        path: "/superAdmin/dashboard",
        element: <SuperAdminDashboard />,
        role: "superAdmin",
        status: "active",
    },
];
