/* eslint-disable react/prop-types */
import { faCalendarDays, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useMyBookMark from "../../Hooks/useMyBookMark";
import { useContext } from "react";
import { ThemContext } from "../../Routes/ThemProvider";


// eslint-disable-next-line react/prop-types
const MarkItem = ({ mark }) => {
    const [{ theme }] = useContext(ThemContext)
    // https://premium-articles-platform-sever.vercel.app/deleteArticle/${article._id}
    // https://toy-marketplace-server-hazel.vercel.app/deleteToys/${_id}

    // eslint-disable-next-line react/prop-types
    const { _id, image, authorImage, authorName, date, title, articleid, description } = mark;

    const { refetch } = useMyBookMark();

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('delete confirm');
                fetch(`https://premium-articles-platform-sever.vercel.app/bookarticle/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your  Bookmark article has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <div>
            <div className="card-compact bg-white mb-3 shadow-md" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
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
                        <div className='flex justify-between ' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                            <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                                <Link to={`/articleDetails/${articleid}`}>
                                    <h2 className="card-title text-xl  hover:underline ">
                                        {title}
                                    </h2>
                                </Link>
                                <p className='text-justify'>{description?.slice(0, 150)}...</p></div>
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
                                <span >

                                    <FontAwesomeIcon
                                        onClick={() => handleDelete(_id)}
                                        className="hover:text-blue-400 text-slate-600 text-sm"
                                        icon={faTrashCan}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MarkItem;