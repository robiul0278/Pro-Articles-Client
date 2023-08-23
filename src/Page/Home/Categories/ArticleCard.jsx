import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from "@fortawesome/free-solid-svg-icons";


const ArticleCard = ({ item }) => {
    const { image, authorImage, authorName, date, readTime, title,tag } = item;
    return (
            <div className="card card-compact bg-base-100 shadow-x">
                <figure className="">
                    <img
                        className=" bg-cover md:h-64 w-full bg-center rounded-xl"
                        src={image}
                        alt="image"
                    />
                </figure>
                <div className="card-body">
                    <div className="flex justify-between pb-3">
                        <div className="flex items-center">
                            <div>
                                <img
                                    className="rounded-full w-14"
                                    src={authorImage}
                                    alt="author"
                                />
                            </div>
                            <div className=" px-3 leading-6">
                                <p className="font-bold">
                                    {authorName}
                                </p>
                                <p className="text-neutral-500 text-sm">
                                    {date}
                                </p>
                            </div>
                        </div>
                        <div className="px-3 ">
                            <span className="text-neutral-500 pr-2 text-">
                                {readTime} min read
                            </span>
                            <button >
                                <FontAwesomeIcon
                                    className="hover:text-blue-400 text-slate-600 text-xl"
                                    icon={faBookmark}
                                />
                            </button>
                        </div>
                    </div>
                    <h2 className="card-title text-xl font-bold py-3">
                        {title}
                    </h2>
                    <p className="py-1 text-sm">{tag}</p>
                    <hr />
                </div>
            </div>
    );
};

export default ArticleCard;