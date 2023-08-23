import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaQuoteLeft } from "react-icons/fa";
import testimonialImg from "../../../assets/testimonials/testimonial.png";
import profileImg1 from "../../../assets/testimonials/p1.png";
import profileImg2 from "../../../assets/testimonials/p2.png";
import profileImg3 from "../../../assets/testimonials/p3.png";
import "./Testimonials.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      breakpoints: {
        '(min-width: 200px)': {
          slides: {
            perView: 1,
          }
        },
        '(min-width: 768px)': {
          slides: {
            perView: 2,
            spacing: 20,
          }
        }
      },
    },
    [
      (slider) => {
        let timeout ;
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 px-4 bg-gradient-to-r from-[#EFF6FF] via-[#fffaff] to-[#FFFFFF]">
          <div>
            <img className="" src={testimonialImg} alt="" />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
              Our Happy Users Thought
            </h1>
            <div ref={sliderRef} className="keen-slider mt-5">
              <div className="keen-slider__slide number-slide1">
                <div className="flex flex-col space-y-12 bg-[#EFF6FF] rounded-md shadow-lg p-3">
                  <FaQuoteLeft size={"30px"} color="#E80040" className="" />
                  <p className="text-justify text-[#033533]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi molestiae dicta nulla sint excepturi. Aspernatur
                    perspiciatis asperiores obcaecati fuga, sapiente ratione
                    ullam aperiam aut nisi!
                  </p>
                  <div className="flex flex-row items-center gap-4">
                    <img className="w-14 h-14 rounded-full" src={profileImg1} />
                    <div className="">
                      <h3 className="text-xl text-[#033533]">Bjorn Lothbrok</h3>
                      <p className="text-xs text-[#033533]">
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="keen-slider__slide number-slide1">
                <div className="flex flex-col p-3 space-y-12 bg-[#EFF6FF] rounded-md shadow-lg">
                  <FaQuoteLeft size={"30px"} color="#E80040" className="" />
                  <p className="text-justify text-[#033533]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi molestiae dicta nulla sint excepturi. Aspernatur
                    perspiciatis asperiores obcaecati fuga, sapiente ratione
                    ullam aperiam aut nisi!
                  </p>
                  <div className="flex flex-row items-center gap-4">
                    <img className="w-14 h-14 rounded-full" src={profileImg2} />
                    <div className="">
                      <h3 className="text-xl text-[#033533]">Lusi Mare</h3>
                      <p className="text-xs text-[#033533]">
                        Khulna, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="keen-slider__slide number-slide1">
                <div className="flex flex-col p-3 space-y-12 bg-[#EFF6FF] rounded-md shadow-lg">
                  <FaQuoteLeft size={"30px"} color="#E80040" className="" />
                  <p className="text-justify text-[#033533]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi molestiae dicta nulla sint excepturi. Aspernatur
                    perspiciatis asperiores obcaecati fuga, sapiente ratione
                    ullam aperiam aut nisi!
                  </p>
                  <div className="flex flex-row items-center gap-4">
                    <img className="w-14 h-14 rounded-full" src={profileImg3} />
                    <div className="">
                      <h3 className="text-xl text-[#033533]">Jennifer lour</h3>
                      <p className="text-xs text-[#033533]">
                        Rajshahi, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions justify-end">
              <Link to="/review" className="btn my-4">Add Review</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
