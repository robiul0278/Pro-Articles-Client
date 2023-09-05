/* eslint-disable react/prop-types */
import { Link, useLoaderData } from 'react-router-dom';
import Comments from './Comment/Comment';
import SocialShare from './SocalShare/SocialShare';


const ArticleDetails = () => {
    const article = useLoaderData()

    const { image, authorImage, authorName, date, description, title, } = article;
    return (
        <section className=''>

            <div className="max-w-7xl mx-auto bg-white">
                <div>
                    <figure className="w-3/4 mx-auto pt-16">
                        <img
                            className=" bg-cover md:h-64 w-full bg-center rounded-xl"
                            src={image}
                            alt="image"
                        />
                    </figure>
                </div>
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
                        <SocialShare></SocialShare>

                    </div>
                    <Link>
                        <h2 className="card-title text-3xl font-bold hover:underline ">
                            {title}
                        </h2>
                    </Link>
                    <p className="py-1 text-xl text-justify">{description}</p>
                    <Comments></Comments>
                    <hr />
                </div>
            </div>
        </section>
    );
};

export default ArticleDetails;