/* eslint-disable react/prop-types */
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Comments from './Comment/Comment';
import SocialShare from './SocalShare/SocialShare';
import usePayment from '../../Hooks/usePayment';
// import Swal from 'sweetalert2';
import useArticle from '../../Hooks/useArticle';
import { faBookmark, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';


const ArticleDetails = () => {
    const [payment] = usePayment();
    const navigate = useNavigate()
    const location = useLocation()
    const singleArticle = useLoaderData()
    const { user } = useSelector((state) => state.auth)

    const {article} = useArticle()
    const { image, authorImage, authorName, date, description, title, _id, category } = singleArticle;

    const relatedArticle = article.filter(item => item.category == category)
    // console.log(relatedArticle)

    // Use a temporary DOM element to parse and manipulate the HTML safely
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = description;
    // Get the text content of the parsed HTML
    const textContent = tempDiv.textContent || tempDiv.innerText || "";
    // Trim the text to the first 150 characters
    const truncatedText = textContent.slice(0, 500);
    // Create a new <p> element with the truncated text
    const truncatedDescription = `<p>${truncatedText}</p>`;
    // Render the truncated HTML using dangerouslySetInnerHTML
    const details = <div dangerouslySetInnerHTML={{ __html: truncatedDescription }} />;




    const handlePayment = () => {
        Swal.fire({
            title: 'Are you Sure?',
            text: "You need to buy subscription for read full article!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Subscribe!'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/subscribe', { state: { from: location }, replace: true })
            }
        })
    }
    const book = {
        articleid: _id,
        userEmail: user?.email,
        displayName: user?.displayName,
        image: image,
        authorImage: authorImage,
        authorName: authorName,
        date: date,
        title: title,
        description: description
    };
    const handleBookMark = () => {
        if (user) {
            fetch('https://premium-articles-platform-sever.vercel.app/bookarticle', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(book)
            })
                .then(res => res.json())
                .then(data => {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Bookmark add',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    console.log(data)
                })
        }else{
            Swal.fire({
                title: 'Please Login',
                text: "Login first then access this route!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location }, replace: true })
                }
                else {
                    navigate('/');
                }
            })
        }

    };

    return (
        <section className='max-w-7xl pt-20  overflow-x-hidden mx-auto bg-white'>
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
                <div className="md:basis-3/4 ">

                    <div className="card-body">
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
                            {
                                payment[0]?.payment === 'paid' ?
                                    <>
                                        <p dangerouslySetInnerHTML={{ __html: description }} />

                                    </> :
                                    <>
                                        {details}
                                        {/* <Link onClick={handlePayment}><span className='text-blue-500 font-mono'> Read more...</span></Link> */}
                                      
                                        <div className='pt-56 p-5 -mt-28 text-error font-serif text-sm md:text-xl bg-gradient-to-t from-slate-200 backdrop-blur-sm'>You have read your last complimentary article <Link onClick={handlePayment} className='text-blue-500 underline cursor-pointer'>subscribed now!.</Link> if you are already a subscriber <Link to='/login' className='text-blue-500 underline cursor-pointer'>sign in.</Link></div>
                                    </>
                            }
                        </p>
 
                        <Comments id={_id}></Comments>
                        <hr />
                    </div>
                </div>

                <div className='md:basis-1/4 mt-4'>
                    <div className='p-3'>
                        <h1 className='text-xl bg-slate-200 p-2 font-semibold'>Most Related Post :</h1>
                    </div>
                    {
                        relatedArticle?.slice(2, 5).map(related =>
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
                                                </div>
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
                                            <div className="text-neutral-500 text-sm mr-3">
                                                <span className='mr-1'><FontAwesomeIcon icon={faCalendarDays} /></span>{related.date}
                                            </div>
                                            <div className="text-neutral-500 font-mono text-sm mr-5">
                                                <span>
                                                    <FontAwesomeIcon
                                                    onClick={handleBookMark}
                                                        className="hover:text-blue-400 text-slate-600 text-sm cursor-pointer"
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