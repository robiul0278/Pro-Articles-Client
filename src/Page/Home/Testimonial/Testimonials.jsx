// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Dna } from 'react-loader-spinner';
import { MdOutlinePostAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';




const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://premium-articles-platform-sever.vercel.app/reviews")
            .then((res) => res.json())
            .then((data) => {
                setReviews(data)
                setLoading(false)
            });

    }, []);



    return (
        <section className='my-5'>
            <div className="text-center  bg-white p-10">
                <h1 className="text-4xl font-bold ">Users Says About Us</h1>
                <p className=" text-center my-2 text-sm">AN EXTENSION FOR FEED THEM SOCIAL</p>
                <hr />
            </div>
            <div>
                {

                    loading ?
                        <div className="flex items-center bg-white justify-center py-32">
                            <Dna
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="dna-loading"
                                wrapperStyle={{}}
                                wrapperClass="dna-wrapper"
                            />
                        </div> :


                        <div className='bg-white'>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {
                                    reviews.map((review) => (
                                        <div key={review?._id}>
                                            <SwiperSlide>
                                                <div className="items-center justify-center">
                                                    <div className="w-full  p-8 rounded-md  flex flex-col items-center">

                                                        <div className="flex items-center mb-4">
                                                            <img src={review?.avatar} alt="User Avatar" className="w-12 h-12 rounded-full mr-4" />

                                                        </div>
                                                        <div>
                                                            <h2 className="text-xl font-bold">{review?.name}</h2>
                                                        </div>
                                                        <p className="text-gray-800 text-base mb-4 w-3/4 text-center">
                                                            {review?.description}
                                                        </p>
                                                        <div className="flex">
                                                            <span>Rating: </span>
                                                            <Rating style={{ maxWidth: 100 }} value={review?.rating} readOnly />
                                                            <span>{''}</span>
                                                        </div>

                                                    </div>

                                                </div>
                                            </SwiperSlide>

                                        </div>

                                    ))

                                }
                                <div className='flex items-center p-3 font-bold justify-end'>
                                    <Link to="/review" className="btn">Add < MdOutlinePostAdd /></Link>
                                </div>

                            </Swiper>
                        </div>
                }
            </div>
        </section>
    );
};

export default Testimonials;