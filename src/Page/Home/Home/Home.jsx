import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Testimonials from "../Testimonial/Testimonials";
import Trending from "../Trending/Trending";
import useTitle from "../../../Hooks/useTitle"


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
    </div>
  );
};
export default Home;
