/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


const ArticleCard = ({ item }) => {
    const { image, authorImage, authorName, date, title, _id, description } = item;
    return (
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
                            <Link to={`/article/${_id}`}>
                                <h2 className="card-title text-xl  hover:underline ">
                                    {title}
                                </h2>
                            </Link>
                            <p className='text-justify'>{description.slice(0, 130)}...</p></div>
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
                        <div className="text-neutral-500 font-mono text-sm mr-5">
                            <span>
                                <FontAwesomeIcon
                                    className="hover:text-blue-400 text-slate-600 text-sm"
                                    icon={faBookmark}
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ArticleCard;