/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import publicRoutes from "./router/routes/publicRoutes";
import { getRoutes } from "./router/routes";
import Router from "./router/Router";

function App() {
    const [allRoutes, setAllRoutes] = useState(...publicRoutes);

    useEffect(() => {
        const routes = getRoutes();
        setAllRoutes([...allRoutes, routes]);
    }, []);

    return <Router allRoutes={allRoutes} />;
}

export default App;
