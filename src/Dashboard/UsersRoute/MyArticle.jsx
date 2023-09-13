import useMyArticle from "../../Hooks/useMyArticle";
import {  faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArticle = () => {
    const [myArticle,refetch] = useMyArticle();
    console.log(myArticle);





    const handleDelete = article => {
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
                fetch(`https://premium-articles-platform-sever.vercel.app/deleteArticle/${article._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Article has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <section className="bg-gradient-to-r h-screen from-[#EFF6FF] via-[#fffaff] to-[#FFFFFF]">
            <div className="text-center outline outline-offset-2 outline-cyan-500  p-8 m-5">
                <h1 className="text-4xl font-bold ">My All Articles</h1>
                <p className=""> Unlock Your Potential with Engaging Education and Inspiring Knowledge</p>
            </div>
            <div className="  ">
                <Helmet>
                    <title>ProWriter | My Article</title>
                </Helmet>


                {
                    myArticle?.map((article) => (
                        <div key={article._id} className=' flex card-compact bg-slate-100 shadow-md m-2'>
                            <div>
                                <figure className="md:w-60 bg-cover w-full p-3">
                                    <img
                                        className="bg-cover bg-center"
                                        src={article.image}
                                        alt="image"
                                    />
                                </figure>

                            </div>

                            <div className="p-3">
                                <div className='flex justify-between '>
                                    <div>
                                        <Link to={`/article/${article?._id}`}>
                                            <h2 className="card-title text-xl  hover:underline ">
                                                {article.title}
                                            </h2>
                                        </Link>
                                        <p className='text-justify'>{article.description?.slice(0, 130)}...</p>
                                    </div>
                                </div>
                                <div className="flex card-actions mt-3 bottom-0 justify-between">
                                    <div className="flex">
                                        <div>
                                            <img
                                                className="rounded-full w-5"
                                                src={article?.authorImage}
                                                alt="author"
                                            />
                                        </div>
                                        <div className="mr-3">
                                            <p className="text-neutral-500 text-sm font-mono">
                                                {article?.authorName}
                                            </p>

                                        </div>
                                        <div className="text-neutral-500 font-mono text-sm mr-3">
                                            <span className='mr-1 btn-sm'><FontAwesomeIcon icon={faCalendarDays} /></span>{article?.date}
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <Link  to={`/dashboard/editArticle/${article?._id}`}><button className="bg-success text-white btn-sm font-bold">Edit</button></Link>
                                        <Link onClick={() => handleDelete(article)} ><button className="bg-error ml-1 text-white btn-sm font-bold">Delete</button></Link>
                                    </div>
                                </div>

                            </div>

                        </div>

                    ))
                }
            </div>
        </section>

    );

};

export default MyArticle;