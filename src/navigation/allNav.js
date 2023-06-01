import { AiFillDashboard } from "react-icons";

export const allNav = [
    {
        id: 1,
        title: "Dashboard",
        icon: <AiFillDashboard />,
        role: "superAdmin",
        path: "/superAdmin/dashboard",
    },
    {
        id: 2,
        title: "All Blogs",
        icon: <AiFillDashboard />,
        role: "superAdmin",
        path: "/superAdmin/dashboard",
    },
    {
        id: 3,
        title: "All Users",
        icon: <AiFillDashboard />,
        role: "superAdmin",
        path: "/superAdmin/allUsers",
    },
    {
        id: 4,
        title: "Dashboard",
        icon: <AiFillDashboard />,
        role: "admin",
        path: "/admin/dashboard",
    },
    {
        id: 5,
        title: "All Blogs",
        icon: <AiFillDashboard />,
        role: "admin",
        path: "/admin/allBlog",
    },
    {
        id: 6,
        title: "Add Blogs",
        icon: <AiFillDashboard />,
        role: "admin",
        path: "/admin/addBlog",
    },
    {
        id: 7,
        title: "Category",
        icon: <AiFillDashboard />,
        role: "admin",
        path: "/admin/category",
    },
];
