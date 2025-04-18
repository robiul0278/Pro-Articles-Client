import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Trending from "../Trending/Trending";
import useTitle from "../../../Hooks/useTitle"
import Accordions from "../Accordion/Accordions";
import ConnectUs from "../ConnectUs/ConnectUs";
import WriteRole from "../WriteRole/WriteRole";
import { ToastContainer } from "react-toastify";

const Home = () => {
  useTitle("Home");
  return (
    <div className="">
      <Banner />
      <div className="max-w-7xl mx-auto">
        <Trending />
        <Categories />
        <WriteRole />
        <Accordions />
        <ConnectUs />
        <ToastContainer />
      </div>
    </div>
  );
};
export default Home;
