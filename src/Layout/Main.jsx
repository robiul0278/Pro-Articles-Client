import { Outlet } from "react-router-dom";
import Navbar from "../Components/Share/Navbar";
import Footer from "../Components/Share/Footer";
import { useContext } from "react";
import { ThemContext } from "../Routes/ThemProvider";



const Main = () => {
    const [{ theme, isDark }, toggleTheme] = useContext(ThemContext)
    console.log('theme', theme)
    return (
        <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <Navbar theme={theme} dark={isDark} toggle={toggleTheme} />
            <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }} className="">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;