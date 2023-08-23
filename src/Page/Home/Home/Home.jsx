import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Contact from "../Contact/Contact";
import Testimonials from "../Testimonial/Testimonials";
import Trending from "../Trending/Trending";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <Trending />
        <Categories></Categories>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </div>
    </div>
  );
};
export default Home;
