import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBitcoinSign, faBriefcase, faChartSimple, faHeart, faLandmarkDome, faMicrochip, faMosque, faPencil, faPeopleArrows, faPersonDigging, faThumbsUp, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import './Banner.css'
import { useState } from "react"

const animation = { duration: 10000, easing: (t) => t }
const Banner = () => {
  const [searchText, setSearchText] = useState("");
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })

  const handleSearch = () => {
    // fetch(`https://toy-marketplace-server-hazel.vercel.app/getToyByText/${searchText}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //      setAllToys(data);
    //   });
  };

  return (
    <div
      className="bg-cover -mt-20 bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/4PXLx0Z/young-woman-reading-textbook-home-library-generated-by-ai.jpg')",
        // height: "800px"  Adjust the height value as needed
      }}
    >
      <div className="mx-auto hero-overlay bg-opacity-60 pb-5 md:pb-36 pt-16 md:pt-56">
        <div className="items-center justify-center flex">
          <div className="md:w-3/4 text-center md:mt-0 mt-12 mx-auto">
            <div className="md:leading-10">
              <div className="flex flex-col items-center justify-center">
                <div className="">
                  <div className="">
                    <h1 className="md:text-5xl text-2xl font-bold text-[#ffffff] md:mt-10 mt-10">
                      Search Your Favorite Article Here!
                    </h1>
                    <p className="text-white md:text-2xl">Engage customers with the best Article.</p>
                  </div>
                  <div className="mt-5 w-3/4 mx-auto z-0">
                    <div className="input-box">
                      <input type="text" placeholder="Search here..." className="uil uil-search"></input>
                      <button className="button">Search</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carusel  */}

              <div className="md:hidden mt-5 pb-6 w-72 mx-auto px-14">
                <div ref={sliderRef} className="keen-slider text-white">
                  <div className="keen-slider__slide number-slide1 flex items-center justify-center ">
                    <span className="mr-1"><FontAwesomeIcon icon={faMicrochip} /></span>
                    <h1>Technology</h1>
                  </div>
                  <div className="keen-slider__slide number-slide2 flex items-center justify-center">
                    <span className="mr-1"><FontAwesomeIcon icon={faChartSimple} /></span>
                    <h1>Marketing</h1>
                  </div>
                  <div className="keen-slider__slide number-slide3 flex items-center justify-center">
                    <span className="mr-1"><FontAwesomeIcon icon={faThumbsUp} /></span>
                    <h1>Social</h1>
                  </div>
                  <div className="keen-slider__slide number-slide4 flex items-center justify-center">
                    <span className="mr-1"><FontAwesomeIcon icon={faPencil} /></span>
                    <h1>Writing</h1>
                  </div>
                  <div className="keen-slider__slide number-slide5 flex items-center justify-center">
                    <span className="mr-1"><FontAwesomeIcon icon={faBriefcase} /></span>
                    <h1>Business</h1>
                  </div>
                  <div className="keen-slider__slide number-slide6 flex items-center justify-center">
                    <span className="mr-1"><FontAwesomeIcon icon={faUserGraduate} /></span>
                    <h1>Education</h1>
                  </div>
                  <div className="keen-slider__slide number-slide7 flex items-center justify-center">
                    <span className="mr-1"><FontAwesomeIcon icon={faLandmarkDome} /></span>
                    <h1>History</h1>
                  </div>
                  <div className="keen-slider__slide number-slide8 flex items-center justify-center">
                    <span className="mr-1"><FontAwesomeIcon icon={faHeart} /></span>
                    <h1>Life</h1>
                  </div>
                  <div className="keen-slider__slide number-slide9 flex items-center justify-center">
                    <span className="mr-1"><FontAwesomeIcon icon={faPeopleArrows} /></span>
                    <h1>Society</h1>
                  </div>
                  <div className="keen-slider__slide number-slide10 flex items-center justify-center">
                    <span className="mr-1"><FontAwesomeIcon icon={faPersonDigging} /></span>
                    <h1>Culture</h1>
                  </div>
                  <div className="keen-slider__slide number-slide11 flex items-center justify-center">
                    <span className="mr-1"><FontAwesomeIcon icon={faBitcoinSign} /></span>
                    <h1>Cryptocurrency</h1>
                  </div>
                  <div className="keen-slider__slide number-slide12 flex items-center justify-center">
                    <span className="mr-1"><FontAwesomeIcon icon={faMosque} /></span>
                    <h1>Religion</h1>
                  </div>
                </div>
              </div>
            </div>


            {/* Categories list   */}

            <div className="hidden lg:flex">
              <div className="grid md:grid-cols-6 grid-cols-3 mt-16 md:w-3/5 mx-auto gap-6 md:gap-5 text-start text-white">
                <div className="flex items-center">
                  <span className="mr-1"><FontAwesomeIcon icon={faMicrochip} /></span>
                  <h1>Technology</h1>
                </div>
                <div className="flex items-center">
                  <span className="mr-1"><FontAwesomeIcon icon={faChartSimple} /></span>
                  <h1>Marketing</h1>
                </div>
                <div className="flex items-center">
                  <span className="mr-1"><FontAwesomeIcon icon={faThumbsUp} /></span>
                  <h1>Social</h1>
                </div>
                <div className="flex items-center">
                  <span className="mr-1"><FontAwesomeIcon icon={faPencil} /></span>
                  <h1>Writing</h1>
                </div>
                <div className="flex items-center">
                  <span className="mr-1"><FontAwesomeIcon icon={faBriefcase} /></span>
                  <h1>Business</h1>
                </div>
                <div className="flex items-center">
                  <span className="mr-1"><FontAwesomeIcon icon={faUserGraduate} /></span>
                  <h1>Education</h1>
                </div>
                <div className="flex items-center">
                  <span className="mr-1"><FontAwesomeIcon icon={faLandmarkDome} /></span>
                  <h1>History</h1>
                </div>
                <div className="flex items-center">
                  <span className="mr-1"><FontAwesomeIcon icon={faHeart} /></span>
                  <h1>Life</h1>
                </div>
                <div className="flex items-center">
                  <span className="mr-1"><FontAwesomeIcon icon={faPeopleArrows} /></span>
                  <h1>Society</h1>
                </div>
                <div className=" flex items-center">
                  <span className="mr-1"><FontAwesomeIcon icon={faPersonDigging} /></span>
                  <h1>Culture</h1>
                </div>
                <div className=" flex items-center">
                  <span className="mr-1"><FontAwesomeIcon icon={faBitcoinSign} /></span>
                  <h1>Crypto</h1>
                </div>
                <div className=" flex items-center">
                  <span className="mr-1"><FontAwesomeIcon icon={faMosque} /></span>
                  <h1>Religion</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;
