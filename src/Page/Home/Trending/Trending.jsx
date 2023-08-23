import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'



const Trending = () => {
    const [blogs, setBlog] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setBlog(data));
    }, []);
    console.log(blogs);
    return (
        <div className="my-10 mx-3 md:mx-0">
            <h1 className="font-bold text-4xl px-4">Trending Topics</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    blogs.map((blog, index) =>

                        <div key={blog._id} className="flex items-center justify-center gap-3">
                            <div className="">
                                <h1 className="text-4xl font-[Orbitron] text-gray-500">{index < 10 ? '0' + (index + 1) : index}</h1>
                            </div>
                            <div className="my-6">
                                <div className="flex items-center gap-2">
                                    <figure className="w-6 ">
                                        <img className="rounded-full" src={blog.authorImage} alt="" />
                                    </figure>
                                    <Link to="#"><h4 className="text-xs text-gray-400">{blog.authorName}</h4></Link>
                                </div>
                                <div>
                                    <h2 className="my-2 font-semibold">{blog.title}</h2>
                                </div>
                                <div className="flex justify-start gap-3 items-center">
                                    <h6 className="text-xs text-gray-400">9 Aug</h6>
                                    <h6 className="text-xs text-gray-400">
                                        <FontAwesomeIcon
                                            className="mr-2"
                                            icon={faEye}
                                        />
                                        {blog.views}
                                    </h6>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default Trending;