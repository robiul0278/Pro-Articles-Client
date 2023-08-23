import { useForm} from "react-hook-form";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;



const WriteArticle = () => {
    const img_hosting_url = `https://api.imgbb.com/1/upload?&key=cf6bb3b03fa4376aa28f506d68c0272c`
    console.log(img_hosting_url,'', img_hosting_token);


    const { register, handleSubmit } = useForm();
    

    const onSubmit = (data ) => {
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
                const {title,name,email,content,category} = data;
                const articleDetails = {
                    articleTitle : title,
                    authorName : name,
                    authorEmail : email,
                    content,
                    category,
                    articleThumbnail: imgurl
                }
                

                /********Insert user details in the database********/

                fetch('https://premium-articles-platform-sever.vercel.app/addarticle', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(articleDetails)
                }).then(res => res.json())
                    .then(data => {


                        console.log(data)
                        Swal.fire({
                            icon: 'success',
                            title: 'Account create successfully',
                        })
                    });
            }
        })
        // console.log(data);
    }
   



    // }
    return (
        <section className='bg-gradient-to-r from-[#EFF6FF] via-[#fffaff] to-[#FFFFFF]'>
            <div className=" lg:px-0 container mx-auto">
            <h1 className="text-5xl  text-center font-bold py-10">Write a Article</h1>
                <div  className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-5">

                    <div className="">
                    <img className='w-[100%] h-auto' src="write1.svg" alt="" data-aos="zoom-in" />
                    </div>
                    
                    <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto">
                        <div className="md:flex gap-3">
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"   {...register("name")} placeholder="name" className="input w-full input-bordered" />
                            </div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">email</span>
                                </label>
                                <input type="email" {...register("email")} placeholder="email" className="input w-full input-bordered" />
                            </div>
                        </div>
                        {/* category */}
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select {...register("category")} defaultValue="Pick One" className="select select-bordered w-full">
                                <option disabled>Pick One</option>
                                <option>Social Media</option>
                                <option>Marketing</option>
                                <option>Technology</option>
                                <option>Writing</option>
                                <option>Business</option>
                                <option>Politics</option>
                                <option>Culture</option>
                                <option>Facebook</option>
                                <option>Life</option>
                                <option>History</option>
                                <option>Society</option>
                                <option>Art</option>
                                <option>Music</option>
                                <option>Travel</option>
                                <option>Life Lesson</option>
                                <option>Leadership</option>
                            </select>
                        </div>
                        {/* title */}
                        <div className="">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input {...register("title")} type="text" placeholder="Title" className="input w-full input-bordered" />
                        </div>
                        {/* image */}
                        <div className="w-full ">
                            <label className="label">
                                <span className="label-text">Image*</span>
                            </label>
                            {/* <input type="file" className="file-input file-input-bordered  " /> */}
                            <input {...register("image")} type="file" placeholder="Title" required className="file-input file-input-bordered w-full max-w-xs" />
                        </div>
                        {/* content */}
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Content</span>
                            </label>
                            <textarea
                                {...register("content")}
                                placeholder="write"
                                required
                                style={{ width: "100%", height: "300px" }}
                                className="input input-bordered" />
                        </div>


                        {/* post */}
                        <div className="flex justify-center">
                            <input className="btn btn-error w-full text-white font-semibold  mt-4" type="submit" value="Publish" />
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default WriteArticle;