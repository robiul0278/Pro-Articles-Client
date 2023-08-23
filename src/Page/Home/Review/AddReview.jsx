import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const AddReview = () => {
  const review = useLoaderData();
  const {user} = useAuth()
  console.log(review);

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const address = form.address.value;
    const description = form.description.value;
    const saveData = {
      avatar: user?.photoURL,
      name: user?.displayName,
      email: user?.email,
      description,
      address
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
        form.reset();
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
          <div className="md:pt-28">
            <form
              onSubmit={handleReview}
              className="gap-5 grid grid-cols-1"
            >
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Your Address
                </label>
                <input
                  type="text"
                  id="address"
                  required
                  name="address"
                  placeholder="address"
                  className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Review Description
                </label>
                <textarea
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
                  className="btn md:btn-wide bg-slate-200 font-bold  rounded focus:outline-none focus:ring-2 "
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
