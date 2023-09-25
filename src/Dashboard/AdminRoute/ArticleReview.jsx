/* eslint-disable react/prop-types */
import { Helmet } from 'react-helmet';
import SocialShare from '../../Page/ArticleDetails/SocalShare/SocialShare';
import Comments from '../../Page/ArticleDetails/Comment/Comment';
import { Link, useLoaderData } from 'react-router-dom';




const ArticleReview = () => {
    const singleArticle = useLoaderData()
    const { image, authorImage, authorName, date, description, title, _id, } = singleArticle;



    return (
        <section className='max-w-7xl pt-20   mx-auto bg-white'>
            <Helmet>
                <title>ProWriter | Post details</title>
            </Helmet>
            <div>
                <figure className="md:w-3/4 mx-auto p-5">
                    <img
                        className=" bg-cover md:h-96 w-full bg-center rounded-"
                        src={image}
                        alt="image"
                    />
                </figure>
            </div>
            <div className='md:flex'>
                <div className="">

                    <div className="card-body ">
                        <hr className='border' />
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <div>
                                    <img
                                        className="rounded-full w-10"
                                        src={authorImage}
                                        alt="author"
                                    />

                                </div>
                                <div className=" px-3">
                                    <p className="font-bold">
                                        {authorName}
                                    </p>
                                    <p className="text-neutral-500 text-sm">
                                        {date}
                                    </p>
                                </div>
                            </div>
                            <div><SocialShare></SocialShare></div>

                        </div>
                        <hr className='border' />
                        <Link>
                            <h2 className="card-title mt-5 text-3xl font-bold">
                                {title}
                            </h2>
                        </Link>
                        <p className="py-1 text-xl text-justify">
                            <p dangerouslySetInnerHTML={{ __html: description }} />
                        </p>

                        <Comments id={_id}></Comments>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArticleReview;