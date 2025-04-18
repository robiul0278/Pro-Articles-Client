import "keen-slider/keen-slider.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBitcoinSign, faBriefcase, faChartSimple, faHeart, faLandmarkDome, faMicrochip, faMosque,
  faPencil, faPeopleArrows, faPersonDigging, faThumbsUp, faUserGraduate
} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  { icon: faMicrochip, label: "Technology" },
  { icon: faChartSimple, label: "Marketing" },
  { icon: faThumbsUp, label: "Social" },
  { icon: faPencil, label: "Writing" },
  { icon: faBriefcase, label: "Business" },
  { icon: faUserGraduate, label: "Education" },
  { icon: faLandmarkDome, label: "History" },
  { icon: faHeart, label: "Life" },
  { icon: faPeopleArrows, label: "Society" },
  { icon: faPersonDigging, label: "Culture" },
  { icon: faBitcoinSign, label: "Crypto" },
  { icon: faMosque, label: "Religion" },
];

const Banner = () => {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleSearch = () => {
    setLoading(true);
    fetch(`https://premium-articles-platform-sever.vercel.app/articleSearch/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchData(data);
        setLoading(false);
      });
  };

  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/HgMLQhY/young-woman-reading-textbook-home-library-generated-by-ai-1-1-1.jpg')" }}>
      <div className="bg-black bg-opacity-60 py-16 md:py-36 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-5xl font-bold mb-2">Get Paid for Your Time: Read, Unlock, Enjoy!</h1>
          <p className="md:text-2xl mb-6">Engage customers with the best Article.</p>

          {/* Search */}
          <div className="flex flex-row sm:flex-row justify-center items-center max-w-2xl mx-auto p-4 gap-1">
            <div className="relative w-full">
              <input
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full px-5 py-3 rounded-2xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 text-black transition-all duration-300"
                type="text"
                placeholder="Type to search..."
              />
            </div>
            <button
              onClick={handleSearch}
              className="sm:ml-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Search
            </button>
          </div>
          {/* Search Results */}
          {loading ? (
            <p className="mt-4">Loading...</p>
          ) : searchData.length > 0 && (
            <div className="bg-white text-blue-600 rounded-lg mt-4 max-w-md mx-auto text-left">
              {searchData.map((item) => (
                <div key={item._id} className="border-b last:border-none px-4 py-2 hover:underline">
                  <Link to={`/articleDetails/${item._id}`}>{item.title}</Link>
                </div>
              ))}
            </div>
          )}

          {/* Marquee for Mobile */}
          <div className="block md:hidden mt-10 px-4 overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: ["100%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
              }}
            >
              {categories.map((cat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-lg min-w-max px-4 py-1 bg-white/30 rounded-xl shadow">
                  <FontAwesomeIcon icon={cat.icon} />
                  <span>{cat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Grid for Desktop */}
          <div className="hidden md:grid grid-cols-2 md:grid-cols-6 gap-6 max-w-4xl mx-auto mt-20">
            {categories.map((cat, idx) => (
              <div key={idx} className="flex items-center gap-2 justify-start">
                <FontAwesomeIcon icon={cat.icon} />
                <span>{cat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
