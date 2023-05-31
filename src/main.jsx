import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./store/index";
import ReactDOM from "react-dom/client";
import "./index.css";
const App = lazy(() => import("./App.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Suspense fallback="loading...">
                    <App />
                    <Toaster />
                </Suspense>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
