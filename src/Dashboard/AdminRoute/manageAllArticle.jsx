import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import useArticle from "../../Hooks/useArticle";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ManageAllArticle = () => {

 const {article, refetch} = useArticle()



    const handleDelete = item => {
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
                fetch(`https://premium-articles-platform-sever.vercel.app/deleteArticle/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            toast.success("Delete successful!",{
                                theme: "light",
                                autoClose: 3000,
                              })
                        }
                    })
            }
        })
    }

    
    return (
        <div className="w-full">
            <Helmet>
                <title>ProWrite | Manage Article</title>
            </Helmet>
            <div className="text-center outline outline-offset-2 outline-cyan-500 bg-white p-8 m-5">
                <h1 className="text-4xl font-bold ">Manages All Article</h1>
                <p className=""> Unlock Your Potential with Engaging Education and Inspiring Knowledge</p>
            </div>
            
            <div className="grid mx-4 gap-5">
                {
                    article.map((item) =>
                        <div key={item._id} className="card card-side bg-slate-100 shadow-lg">
                            <figure><img className="w-60" src={item.image} alt="Movie" /></figure>
                            <div className="flex  justify-between w-full">
                                <div className="ml-5 py-1 w-3/4">
                                    <h4 className="text-xl">{item.title}</h4>
                                    {/* <p className="text-sm">{item.description?.slice(0,150)}...</p> */}
                                    <div className="flex mt-2">
                                    <img className="rounded-full w-6" src={item.authorImage} alt="" />
                                    <p className="font-bold ml-1">{item.authorName}</p>
                                    </div>
                                    <p>{item.date}</p>
                                </div>
                                <div className="p-5 w-1/4 grid grid-cols-1 ">

                                        <button onClick={() => handleDelete(item)} className="btn text-white btn-sm  bg-error ">Delete</button>

                                        <button className="btn btn-sm text-white bg-slate-400 "><Link to={`/dashboard/review/${item?._id}`}>Preview</Link></button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default ManageAllArticle;