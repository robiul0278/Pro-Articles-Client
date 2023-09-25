import { useContext } from "react";
import { Link } from "react-router-dom";
import { Dna } from "react-loader-spinner";
import { ThemContext } from "../../../Routes/ThemProvider";
import useArticle from "../../../Hooks/useArticle";



const Trending = () => {
    const [{ theme }] = useContext(ThemContext)
    const {article, loading} = useArticle()

    return (
        <section className=" bg-white p-5"  style={{ backgroundColor: theme.backgroundColor, color: theme.color }} >
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
                            article?.slice(0,6).map((blog, index) =>

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
                                            <h6 className="text-xs text-gray-400">{blog.date}</h6>
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