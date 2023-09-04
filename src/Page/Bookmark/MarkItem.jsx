import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const MarkItem = ({ mark }) => {
    // eslint-disable-next-line react/prop-types
    const { image, authorImage, authorName, date, title, _id, description } = mark;
    return (
        <div>
            <div className="card-compact bg-white mb-3 shadow-md">
                <div className='md:flex'>
                    <div>
                        <figure className="md:w-60 bg-cover w-full p-3">
                            <img
                                className="bg-cover bg-center"
                                src={image}
                                alt="image"
                            />
                        </figure>
                    </div>
                    <div className="p-3">
                        <div className='flex justify-between '>
                            <div>
                                <Link to={`/articleDetails/${_id}`}>
                                    <h2 className="card-title text-xl  hover:underline ">
                                        {title}
                                    </h2>
                                </Link>
                                <p className='text-justify'>{description?.slice(0,150)}...</p></div>
                        </div>
                        <div className="flex card-actions mt-5 bottom-0">
                            <div>
                                <img
                                    className="rounded-full w-5"
                                    src={authorImage}
                                    alt="author"
                                />
                            </div>
                            <div className="mr-3">
                                <p className="text-neutral-500 text-sm font-mono">
                                    {authorName}
                                </p>

                            </div>
                            <div className="text-neutral-500 font-mono text-sm mr-3">
                                <span className='mr-1'><FontAwesomeIcon icon={faCalendarDays} /></span>{date}
                            </div>
                            {/* <div className="text-neutral-500 font-mono text-sm mr-5">
                <span onClick={handleBookMark}>
                    <FontAwesomeIcon
                        className="hover:text-blue-400 text-slate-600 text-sm"
                        icon={faBookmark}
                    />
                </span>
            </div> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MarkItem;