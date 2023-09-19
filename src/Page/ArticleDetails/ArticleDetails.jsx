/* eslint-disable react/prop-types */
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Comments from './Comment/Comment';
import SocialShare from './SocalShare/SocialShare';
import usePayment from '../../Hooks/usePayment';
import Swal from 'sweetalert2';
import useArticle from '../../Hooks/useArticle';
import { faBookmark, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const ArticleDetails = () => {
    const [payment] = usePayment();
    const navigate = useNavigate()
    const location = useLocation()
    const singleArticle = useLoaderData()
    const [article] = useArticle()
    const { image, authorImage, authorName, date, description, title, _id, category } = singleArticle;

    const relatedArticle = article.filter(item => item.category == category)
    console.log(relatedArticle)

    const handlePayment = () => {

        Swal.fire({
            title: 'Please Subscribe?',
            text: "You need to buy subscription for read full article!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Subscribe!'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/membership', { state: { from: location }, replace: true })
            }
        })
    }

    return (
        <section className='max-w-7xl  mx-auto bg-white'>
            <div>
                <figure className="w-3/4 mx-auto py-16">
                    <img
                        className=" bg-cover md:h-96 w-full bg-center rounded-xl"
                        src={image}
                        alt="image"
                    />
                </figure>
            </div>
            <div className=' flex flex-row'>
                <div className="basis-3/4 ">

                    <div className="card-body border-r-4">
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
                        <p className="py-1 text-xl text-justify">
                            {
                                payment[0]?.payment === 'paid' ?
                                    <>
                                        {description}
                                    </> :
                                    <>
                                        {description.slice(0, 200)}
                                        <Link onClick={handlePayment}><span className='cursor-pointer font-mono'> read more...</span></Link>
                                    </>
                            }
                        </p>

                        <Comments id={_id}></Comments>
                        <hr />
                    </div>
                </div>

                <div className='basis-1/4'>
                    <div className='p-3'>
                        <h1 className='text-xl font-semibold'>Most Related Post :</h1>
                    </div>
                    {
                        relatedArticle?.slice(1, 4).map(related =>
                            <div key={related._id}>
                                <div className=''>
                                    <div>
                                        <figure className="bg-cover w-full p-3">
                                            <img
                                                className="bg-cover bg-center"
                                                src={related?.image}
                                                alt="image"
                                                loading='lazy'
                                            />
                                        </figure>
                                    </div>
                                    <div className="p-3">
                                        <div className='flex justify-between '>
                                            <div>
                                                <Link to={`/articleDetails/${related._id}`}>
                                                    <h2 className="card-title text-xl  hover:underline ">
                                                        {title}
                                                    </h2>
                                                </Link>
                                                <p className='text-justify'>{related.description.slice(0, 100)}...</p></div>
                                        </div>
                                        <div className="flex card-actions mt-5 bottom-0">
                                            <div>
                                                <img
                                                    className="rounded-full w-5"
                                                    src={related.authorImage}
                                                    alt="author"
                                                />
                                            </div>
                                            <div className="mr-3">
                                                <p className="text-neutral-500 text-sm font-mono">
                                                    {related.authorName}
                                                </p>

                                            </div>
                                            <div className="text-neutral-500 font-mono text-sm mr-3">
                                                <span className='mr-1'><FontAwesomeIcon icon={faCalendarDays} /></span>{related.date}
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
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default ArticleDetails;