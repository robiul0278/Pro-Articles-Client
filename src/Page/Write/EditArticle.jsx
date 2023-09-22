import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
// import useAuth from "../../Hooks/useAuth";
import useTitle from "../../Hooks/useTitle"
import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";



const EditArticle = () => {
    const edit = useLoaderData();
    const { category, title, date, readTime, description, _id } = edit;

    const editor = useRef(null);
    // const { user } = useAuth();
    const { user } = useSelector((state) => state.auth)


    useTitle("Write");
    const { register, handleSubmit, reset } = useForm();
    const [descriptions, setContent] = useState({ description });

    const onSubmit = (data) => {
        const { title, category, readTime, date } = data;
        const updateArt = {
            authorName: user?.displayName,
            authorImage: user?.photoURL,
            email: user?.email,
            description: descriptions,
            category,
            readTime,
            date,
            title,
        }
        console.log(updateArt);



        /********Insert user details in the database********/

        fetch(`https://premium-articles-platform-sever.vercel.app/updateArticle/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateArt)
        }).then(res => res.json())
            .then(data => {

                reset()
                console.log(data)
                Swal.fire({
                    icon: 'success',
                    title: 'Update successfully!',
                })
            });
    }

        // console.log(data);
    




// }
return (
    <section className='bg-gradient-to-r from-[#EFF6FF] via-[#fffaff] to-[#FFFFFF]'>
        <div className="px-4 container mx-auto">
            <h1 className="text-5xl  text-center font-bold py-10">Edit Article</h1>
            <div className="grid grid-cols-1 pb-5">
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto">
                        <div className="md:flex gap-3">
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" value={user?.displayName}  {...register("name")} placeholder="name" className="input w-full input-bordered" />
                            </div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" value={user?.email} {...register("email")} placeholder="email" className="input w-full input-bordered" />
                            </div>
                        </div>
                        {/* category */}
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Post Category</span>
                            </label>
                            <select {...register("category")} defaultValue={category} className="select select-bordered w-full" required>
                                <option disabled>Pick One</option>
                                <option>Technology</option>
                                <option>Marketing</option>
                                <option>Social</option>
                                <option>Writing</option>
                                <option>Business</option>
                                <option>Travel</option>
                                <option>Culture</option>
                                <option>Society</option>
                                <option>Life</option>
                                <option>History</option>
                                <option>Religion</option>
                                <option>Cryptocurrency</option>
                                <option>Education</option>
                            </select>
                        </div>
                        {/* title */}
                        <div className="">
                            <label className="label">
                                <span className="label-text">Article Title</span>
                            </label>
                            <input {...register("title")} defaultValue={title} type="text" placeholder="Title" className="input w-full input-bordered" />
                        </div>
                        {/* Read time  */}
                        <div className="">
                            <label className="label">
                                <span className="label-text">Read Time</span>
                            </label>
                            <input {...register("readTime")} defaultValue={readTime} type="number" placeholder="Read time" className="input w-full input-bordered" />
                        </div>
                        {/* Time and Date  */}
                        <div className="">
                            <label className="label">
                                <span className="label-text">Article Write Date</span>
                            </label>
                            <input {...register("date")} defaultValue={date} type="date" placeholder="read time" className="input w-full input-bordered" />
                        </div>

                        <div>
                            <JoditEditor
                                ref={editor}
                                value={description}
                                tabIndex={1}
                                onChange={newContent => setContent(newContent)} // 
                            />
                        </div>


                        {/* post */}
                        <div className="flex justify-center">
                            <input className="btn btn-error w-full text-white font-semibold  mt-4" type="submit" value="Update" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
);
};
export default EditArticle;