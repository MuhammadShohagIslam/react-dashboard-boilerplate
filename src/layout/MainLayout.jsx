import Navbar from "../navigation/Navbar/Navbar";

const MainLayout = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    return (
        <>
            {/* Dashboard Layout */}
            <Navbar
                openSidebar={openSidebar}
                setOpenSidebar={setOpenSidebar}
            />

            {/* Dashboard Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-40 w-64 h-screen pt-24 transition-all bg-white border-r border-gray-200 lg:translate-x-0 ${
                    openSidebar
                        ? "translate-x-0"
                        : "-translate-x-full"
                }`}
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
                    <Sidebar />
                </div>
            </aside>

            {/* Dashboard Content */}
            <div className="lg:ml-72 ml-3  pt-28 lg:pr-6 pr-3 pb-12">
                <Outlet/>
            </div>
        </>
    );
};

export default MainLayout;