import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBitcoinSign, faBriefcase, faChartSimple, faHeart, faLandmarkDome, faMicrochip, faMosque, faPencil, faPeopleArrows, faPersonDigging, faThumbsUp, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { Link } from "react-router-dom"
// import Marquee from "react-fast-marquee";
// import { Link } from "react-router-dom"

const animation = { duration: 10000, easing: (t) => t }
const Banner = () => {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([])
  const [loading, setLoading] = useState(false);
  // console.log(searchData);



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
    setLoading(true);
    <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button>


    fetch(`https://premium-articles-platform-sever.vercel.app/articleSearch/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchData(data);
        setLoading(false);
      })
  };


  return (
    <div
      className="bg-cover md:-mt-32 bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/HgMLQhY/young-woman-reading-textbook-home-library-generated-by-ai-1-1-1.jpg')",
        // height: "800px"  Adjust the height value as needed
      }}
    >
      <div className="mx-auto hero-overlay bg-opacity-60 pb-5 md:pb-36 mt-16 md:pt-56">
        <div className="flex">
          <div className="w-3/4 text-center md:mt-0 mt-12 mx-auto">
            <div className="md:leading-10 flex flex-col items-center justify-center md:mt-10 mt-16">
              <div className="items-center justify-center">
                <h1 className="md:text-5xl text-2xl font-bold text-[#ffffff] mb-2 text-center">
                Get Paid for Your Time: Read, Unlock, Enjoy!
                </h1>
                <p className="text-white md:text-2xl">Engage customers with the best Article.</p>
              </div>
              <div className="mt-5 flex justify-center items-center">
                <div className="">
                  <input onChange={(e) => setSearchText(e.target.value)} className="input input-bordered rounded-r-none max-w-md text-black w-full pr-16"
                    type="text"
                    placeholder="Search" />
                </div>
                <div>
                  <button onClick={handleSearch} className="btn text-white btn-error top-0 right-0 rounded-l-none">Search</button>
                </div>
              </div>

              {/* search here */}
              <div className="absolute flex items-center justify-center mt-[264px] px-5">
                <div className="">
                  {
                    loading ? (
                      <div className="text-center  items-center justify-center">
                        <p className="text-center">Loading...</p>
                      </div>
                    ) : searchData.length > 0 ? (
                      <div className="items-center justify-center text-center">
                        {searchData.map((data) => (
                          <div key={data._id}>

                            <ul className="menu bg-white w-full text-blue-600 hover:underline">
                              <li><Link to={`/articleDetails/${data?._id}`}>{data?.title}</Link></li>
                            </ul>
                            <hr />
                          </div>
                        ))}
                      </div>
                    ) :
                      (
                        <div className="text-center text-white">
                          {/* <p>No results found.</p> */}
                        </div>
                      )
                  }
                </div>
              </div>

              {/* Modal  */}
              {/* Open the modal using ID.showModal() method */}

              {/* <Marquee>
                I can be a React component, multiple React components, or just some text.
              </Marquee> */}

              {/* Carusel  */}
              
              <div className="md:hidden  mt-5 w-5/6 md:w-1/6 pb-6  mx-auto px-14">
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
              <div className="grid md:grid-cols-6 grid-cols-3 mt-32 md:w-3/5 mx-auto gap-6 md:gap-5 text-start text-white">
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
