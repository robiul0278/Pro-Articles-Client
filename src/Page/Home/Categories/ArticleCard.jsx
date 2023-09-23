/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { ThemContext } from '../../../Routes/ThemProvider';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const ArticleCard = ({ item }) => {
    const [{ theme }] = useContext(ThemContext)
    // const { user } = useAuth();
    const {user} = useSelector((state) => state.auth)
    const navigate = useNavigate();
    const { image, authorImage, authorName, date, title, _id, description } = item;
    // console.log(description);
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

    // Use a temporary DOM element to parse and manipulate the HTML safely
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = description;
    // Get the text content of the parsed HTML
    const textContent = tempDiv.textContent || tempDiv.innerText || "";
    // Trim the text to the first 150 characters
    const truncatedText = textContent.slice(0, 150);
    // Create a new <p> element with the truncated text
    const truncatedDescription = `<p>${truncatedText}</p>`;
    // Render the truncated HTML using dangerouslySetInnerHTML
    const details = <div dangerouslySetInnerHTML={{ __html: truncatedDescription }} />;

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
        <div className="card-compact bg-white mb-3 shadow-md" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <div className='md:flex'>
                <div>
                    <figure className="md:w-60 bg-cover w-full p-3">
                        <img
                            className="bg-cover bg-center"
                            src={image}
                            alt="image"
                            loading='lazy'
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
                            <p>{details}</p>
                        </div>
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
                            <span onClick={handleBookMark}>
                                <FontAwesomeIcon
                                    className="hover:text-blue-400 cursor-pointer text-slate-600 text-sm"
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