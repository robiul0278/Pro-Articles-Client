import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const review = useLoaderData();
  const { user } = useAuth()

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const { description, rating } = data;
    const saveData = {
      avatar: user?.photoURL,
      name: user?.displayName,
      email: user?.email,
      description,
      rating,
    };
    console.log(saveData);

    fetch("https://premium-articles-platform-sever.vercel.app/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(saveData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Review Added Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        console.log(data);
      });
  };
  return (
    <section className='bg-gradient-to-r from-[#EFF6FF] via-[#fffaff] to-[#FFFFFF]'>
      <div className="px-4 lg:px-0 max-w-7xl mx-auto ">
        <h1 className="text-5xl  text-center font-bold py-10">Add Your Review</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className='mb-10' data-aos="fade-right">
            <img className='w-[100%] h-auto' src="https://i.ibb.co/8x8DvSD/Email-campaign-amico.png" alt="" data-aos="zoom-in" />
          </div>
          <div className="md:py-16">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="gap-5 grid grid-cols-1"
            >
              <div className="grid grid-cols-2 gap-5">
                {/* User name  */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Your name
                  </label>
                  <input
                    value={user?.displayName} {...register("name")}
                    type="text"
                    id="address"
                    required
                    name="address"
                    className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {/* User email  */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Your email
                  </label>
                  <input
                    value={user?.email} {...register("email")}
                    type="email"
                    id="address"
                    required
                    name="address"
                    className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              {/* Rating  */}

              <div className="rating">
                <label className="block text-gray-700 font-bold mb-2">
                  Add rating:
                </label>
                <input {...register("rating")} type="radio" name="rating" value="1" id="rating-1" className="mask mask-star-2 bg-orange-400" defaultChecked={review?.rating === "1"} />
                <input {...register("rating")} type="radio" name="rating" value="2" id="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={review?.rating === "2"} checked />
                <input {...register("rating")} type="radio" name="rating" value="3" id="rating-3" className="mask mask-star-2 bg-orange-400" defaultChecked={review?.rating === "3"} />
                <input {...register("rating")} type="radio" name="rating" value="4" id="rating-4" className="mask mask-star-2 bg-orange-400" defaultChecked={review?.rating === "4"} />
                <input {...register("rating")} type="radio" name="rating" value="5" id="rating-5" className="mask mask-star-2 bg-orange-400" defaultChecked={review?.rating === "5"} />
              </div>

              {/* Review description  */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Review Description
                </label>
                <textarea
                  {...register("description")}
                  type="text"
                  id="description"
                  required
                  name="description"
                  placeholder="description"
                  rows={4}
                  className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn text-white font-semibold w-full bg-error hover:bg-error focus:ring-2 "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddReview;
