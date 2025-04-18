import { Outlet } from "react-router-dom";
import Navbar from "../Components/Share/Navbar";
import Footer from "../Components/Share/Footer";

const MainLayout = () => {
    return (
        <div className="w-full mx-auto bg-white">
            <Navbar />
                <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;