import Sidebar from "../components/Sidebar/Sidebar";

const FarmerLayout = ({ children }) => {
    return (

        <div className="bg-background-light dark:bg-background-dark font-display text-[#131615] dark:text-white transition-colors duration-200">
            <div className="flex min-h-screen">
                {/*  <!-- Sidebar --> */}
                <Sidebar />
                {children}
            </div>

        </div>
    )
}

export default FarmerLayout; 