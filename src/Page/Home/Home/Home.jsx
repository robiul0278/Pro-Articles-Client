import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Trending from "../Trending/Trending";
import useTitle from "../../../Hooks/useTitle"
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Accordions from "../Accordion/Accordions";
import ConnectUs from "../ConnectUs/ConnectUs";
import WriteRole from "../WriteRole/WriteRole";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <Trending />
        <Categories></Categories>
        <WriteRole/>
        <Accordions></Accordions>
        <ConnectUs/>
      </div>
      <MessengerCustomerChat
        pageId="104012685668307"
        appId="987751052491814"
      // htmlRef="<REF_STRING>"
      />
    </div>
  );
};
export default Home;
