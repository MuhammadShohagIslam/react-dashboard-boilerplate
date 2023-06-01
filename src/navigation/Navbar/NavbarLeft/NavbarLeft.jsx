import Logo from '../../../../assets/home/banner/logo.png';
import { Link } from 'react-router-dom';

const NavbarLeft = ({ openSidebar, setOpenSidebar }) => {
    return (
        <>
            <div className="flex items-center justify-start">
                <button
                    onClick={() => setOpenSidebar(!openSidebar)}
                    type="button"
                    className="inline-flex items-center p-2 text-sm text-primary rounded-lg lg:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary "
                >
                    <span className="sr-only">Open sidebar</span>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                        ></path>
                    </svg>
                </button>
                <Link to="/dashboard" className="flex ml-2 md:mr-24">
                    <img
                        src={Logo}
                        className="h-14 mr-3"
                        alt="Amina Logo"
                    />
                   
                </Link>
            </div>
            <div className="lg:flex items-start hidden">
                <div>
                    <form action="#" method="GET" className="">
                        <label htmlFor="top-bar-search" className="sr-only">
                            Search
                        </label>
                        <div className="relative mt-1 w-80">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-5 h-5 text-gray-700 "
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                type="text"
                                name="search-dashboard"
                                id="top-bar-search"
                                className="bg-white-50 shadow-lg border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-800 placeholder:text-gray-700 focus:border-gray-500 block w-full pl-10 p-2.5 focus:outline-1 focus:outline-primary "
                                placeholder="Search"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NavbarLeft;
