import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../../context/AuthProvider/AuthProvider";

const Profile = () => {
    const { logOut } = useAuth();
    const [openProfile, setOpenProfile] = useState(false);
    const route = useNavigate();

    const handleLogOut = () => {
        logOut().then(() => {
            route("/login");
        });
    };
    return (
        <div className="flex items-center">
            <div>
                <button
                    type="button"
                    className={`w-[46px] h-[46px] flex border-4 rounded-full ${
                        openProfile
                            ? "drop-shadow-2xl  border-primary"
                            : "text-gray-800"
                    } hover:border-primary drop-shadow-lg bg-white hover:drop-shadow-2xl transition-all relative`}
                    onClick={() => setOpenProfile(!openProfile)}
                >
                    <span className="sr-only">Open user menu</span>
                    <img
                        className="w-full h-full rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="user photo"
                    />
                </button>
            </div>
            {openProfile && (
                <div className="z-50 absolute right-1 top-[80%] my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow ">
                    <div className="px-4 py-3" role="none">
                        <p className="text-sm text-gray-900 " role="none">
                            Neil Sims
                        </p>
                        <p
                            className="text-sm font-medium text-gray-900 truncate "
                            role="none"
                        >
                            neil.sims@flowbite.com
                        </p>
                    </div>
                    <ul className="py-1" role="none">
                        <li>
                            <Link
                                to="/"
                                className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-100 "
                                role="menuitem"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                                role="menuitem"
                            >
                                Settings
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  "
                                role="menuitem"
                            >
                                Earnings
                            </Link>
                        </li>
                        <li>
                            <li
                                onClick={handleLogOut}
                                className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                                role="menuitem"
                            >
                                Sign out
                            </li>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Profile;
