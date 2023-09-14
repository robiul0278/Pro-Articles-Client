import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Dna } from "react-loader-spinner";
import { ThemContext } from "../../../Routes/ThemProvider";



const Trending = () => {
    const [{ theme }] = useContext(ThemContext)
    const [blogs, setBlog] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://premium-articles-platform-sever.vercel.app/article")
            .then((res) => res.json())
            .then((data) => {
                setBlog(data);
                setLoading(false);
            })
    }, []);
    // console.log(blogs);
    return (
        <section style={{ backgroundColor: theme.backgroundColor, color: theme.color }} className=" bg-white p-5" >
            <h1 className="font-bold text-2xl md:text-4xl py-4">Recent Posts</h1>
            {
                loading ?
                    <div className="flex items-center justify-center py-28">
                        <Dna
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="dna-loading"
                            wrapperStyle={{}}
                            wrapperClass="dna-wrapper"
                        />
                    </div> :

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {
                            blogs.slice(0, 6).map((blog, index) =>

                                <div key={blog._id} className="flex items-center justify-center gap-3">
                                    <div className="">
                                        <h1 className="text-4xl font-[Orbitron] text-gray-500">{index < 10 ? '0' + (index + 1) : index}</h1>
                                    </div>
                                    <div className="my-2">
                                        <div className="flex items-center gap-2">
                                            <figure className="w-6 ">
                                                <img className="rounded-full" src={blog?.authorImage} alt="" />
                                            </figure>
                                            <Link to="#"><h4 className="text-xs text-gray-400">{blog?.authorName}</h4></Link>
                                        </div>
                                        <div>
                                            <Link to={`/articleDetails/${blog?._id}`} className="my-1 hover:underline font-semibold">{blog?.title}</Link>
                                        </div>
                                        <div className="flex justify-start gap-3 items-center">
                                            <h6 className="text-xs text-gray-400">9 Aug</h6>
                                            <h6 className="text-xs text-gray-400">
                                                <FontAwesomeIcon
                                                    className="mr-2"
                                                    icon={faEye}
                                                />
                                            </h6>
                                        </div>
                                    </div>

                                </div>

                            )
                        }
                    </div>

            }
        </section>
    );
};

export default Trending;