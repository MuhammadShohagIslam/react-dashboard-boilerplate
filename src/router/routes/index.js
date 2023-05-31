import MainLayout from "../../layout/MainLayout";
import ProtectRoutes from "./ProtectRoutes";
import { privateRoutes } from "./privateRoutes";

export const getRoutes = () => {
    privateRoutes.map((pr) => {
        pr.element = <ProtectRoutes route={pr}>{pr.element}</ProtectRoutes>;
    });
    return {
        path: "/",
        element: <MainLayout />,
        children: privateRoutes,
    };
};
