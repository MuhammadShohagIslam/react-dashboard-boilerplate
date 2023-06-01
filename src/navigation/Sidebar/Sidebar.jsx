import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getNav } from "..";

const Sidebar = () => {
    const activePathName = useLocation().pathname;
    const { role } = useSelector((state) => state.auth);
    const [allNav, setAllNav] = useState([]);

    useEffect(() => {
        const naves = getNav("admin");
        setAllNav(naves);
    }, [role]);

    return (
        <ul className="space-y-2 font-medium">
            {allNav.map((nav) => (
                <li className="group">
                    <Link
                        to={nav.path}
                        className={`flex items-center p-2 transition-all rounded-lg ${
                            activePathName === `${nav.path}`
                                ? "text-primary"
                                : "text-gray-700"
                        } `}
                    >
                        {nav.icon}
                        <span
                            className={`ml-3 group-hover:text-primary transition-all ${
                                activePathName === `${nav.path}`
                                    ? "text-primary"
                                    : "text-gray-700"
                            } `}
                        >
                            {nav.title}
                        </span>
                    </Link>
                </li>
            ))}

            <li className="group">
                <Link
                    to={"/login"}
                    className={`flex items-center p-2 rounded-lg`}
                >
                    <svg
                        aria-hidden="true"
                        className={`w-6 h-6 flex-shrink ${
                            activePathName === "/login"
                                ? "text-primary"
                                : "text-primary"
                        }  transition duration-75  group-hover:text-primary`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <span
                        className={`ml-3 group-hover:text-primary transition-all ${
                            activePathName === `/login`
                                ? "text-primary"
                                : "text-gray-700"
                        } `}
                    >
                        Login
                    </span>
                </Link>
            </li>
            <li className="group">
                <Link
                    to={"/sign-up"}
                    className={`flex items-center p-2 rounded-lg`}
                >
                    <svg
                        aria-hidden="true"
                        className={`w-6 h-6 flex-shrink-0 ${
                            activePathName === "/sign-up"
                                ? "text-primary"
                                : "text-primary"
                        }  transition duration-75  group-hover:text-primary`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <span
                        className={`ml-3 group-hover:text-primary transition-all ${
                            activePathName === `/sign-up`
                                ? "text-primary"
                                : "text-gray-700"
                        } `}
                    >
                        Sign Up
                    </span>
                </Link>
            </li>
        </ul>
    );
};

export default Sidebar;
