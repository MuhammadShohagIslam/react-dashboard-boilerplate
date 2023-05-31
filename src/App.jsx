/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import publicRoutes from "./router/routes/publicRoutes";
import { getRoutes } from "./router/routes";
import Router from "./router/Router";
import { useDispatch, useSelector } from "react-redux";
import { get_user_info } from "./store/reducers/authReducers";

function App() {
    const [allRoutes, setAllRoutes] = useState(...publicRoutes);
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    
    useEffect(() => {
        const routes = getRoutes();
        setAllRoutes([...allRoutes, routes]);
    }, []);

    useEffect(() => {
        if (token) {
            dispatch(get_user_info());
        }
    }, [token]);

    return <Router allRoutes={allRoutes} />;
}

export default App;
