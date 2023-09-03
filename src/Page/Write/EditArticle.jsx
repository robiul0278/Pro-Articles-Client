import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useTitle from "../../Hooks/useTitle"
import { useLoaderData } from "react-router-dom";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;


const EditArticle = () => {
    const {edit} = useLoaderData();
    console.log(edit?.title);
    console.log(edit);
    const img_hosting_url = `https://api.imgbb.com/1/upload?&key=cf6bb3b03fa4376aa28f506d68c0272c`
    console.log(img_hosting_url, '', img_hosting_token);
    const { user } = useAuth();


    useTitle("Write");
    const { register, handleSubmit, reset } = useForm();



    const onSubmit = (data) => {
        const formData = new FormData();
        console.log(data);
        formData.append('image', data.image[0]);
        console.log(formData);
        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgurl = imgResponse.data.display_url;
                    const { title, description, category, readTime, date } = data;
                    const articleDetails = {
                        authorName: user?.displayName,
                        authorImage: user?.photoURL,
                        email: user?.email,
                        status:"pending",
                        description,
                        category,
                        readTime,
                        date,
                        title,
                        image: imgurl
                    }
                    console.log(articleDetails);



                    /********Insert user details in the database********/

                    fetch('https://premium-articles-platform-sever.vercel.app/addArticle', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(articleDetails)
                    }).then(res => res.json())
                        .then(data => {

                            reset()
                            console.log(data)
                            Swal.fire({
                                icon: 'success',
                                title: 'Edit successfully!',
                            })
                        });
                }
            })
        // console.log(data);
    }




    // }
    return (
        <section className='bg-gradient-to-r from-[#EFF6FF] via-[#fffaff] to-[#FFFFFF]'>
            <div className="px-4 container mx-auto">
                <h1 className="text-5xl  text-center font-bold py-10">Edit Article</h1>
                <div className="grid grid-cols-1 pb-5">

                    {/* <div className="">
                        <img className='w-[100%] h-auto' src="write1.svg" alt="" data-aos="zoom-in" />
                    </div> */}

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
                                <select {...register("category")}   className="select select-bordered w-full">
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
                                <input {...register("title")}  type="text" placeholder="Title" className="input w-full input-bordered" />
                            </div>
                            {/* Read time  */}
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Read Time</span>
                                </label>
                                <input {...register("readTime")}  type="number" placeholder="Read time" className="input w-full input-bordered" />
                            </div>
                            {/* Time and Date  */}
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Article Write Date</span>
                                </label>
                                <input {...register("date")}  type="date" placeholder="read time" className="input w-full input-bordered" />
                            </div>
                            {/* image */}
                            <div className="w-full ">
                                <label className="label">
                                    <span className="label-text">Article Image*</span>
                                </label>
                                {/* <input type="file" className="file-input file-input-bordered  " /> */}
                                <input {...register("image")}  type="file" placeholder="Title" required className="file-input file-input-bordered w-full max-w-xs" />
                            </div>
                            {/* content */}
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Article Description</span>
                                </label>
                                <textarea
                                    {...register("description")}
                                    placeholder="write...."
                                    required
                                    // defaultValue={description}
                                    style={{ width: "100%", height: "300px" }}
                                    className="input input-bordered" />
                            </div>


                            {/* post */}
                            <div className="flex justify-center">
                                <input className="btn btn-accent w-full text-white font-semibold  mt-4" type="submit" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default EditArticle;