import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Testimonials from "../Testimonial/Testimonials";
import Trending from "../Trending/Trending";
import useTitle from "../../../Hooks/useTitle"
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <Trending />
        <Categories></Categories>
        <Testimonials></Testimonials>
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
