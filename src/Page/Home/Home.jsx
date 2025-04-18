import useTitle from "../../Hooks/useTitle"
import { ToastContainer } from "react-toastify";
import BlogPage from "./Blog/BlogPage";
import RecentPost from "./RecentPost";
import Banner from "./Banner";
import WriteRole from "./WriteRole";
import Accordions from "./Accordions";
import ConnectUs from "./ConnectUs";

const Home = () => {
  useTitle("Home");
  return (
    <div className="">
      <Banner />
      <div className="max-w-[1480px] mx-auto px-2 md:px-16 lg:px-16 bg-white">
        <RecentPost />
        <BlogPage />
        <WriteRole />
        <Accordions />
        <ConnectUs />
        <ToastContainer />
      </div>
    </div>
  );
};
export default Home;
