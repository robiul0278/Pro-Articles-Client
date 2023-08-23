import { Outlet } from "react-router-dom";
import Navbar from "../Components/Share/Navbar";
import Footer from "../Components/Share/Footer";


const Main = () => {
    return (
        <div>
            <Navbar/>
            <div className="">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;