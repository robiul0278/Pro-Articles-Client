import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AddReview = () => {
  const review = useLoaderData();
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

    fetch("http://localhost:5000/reviews", {
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
          title: "Added Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        console.log(data);
      });
  };
  return (
    <div>
      <div className="bg-gray-100">
        <div className=" mx-auto px-4 py-8">
          <div className="text-center outline outline-offset-2 outline-slate-300 bg-white p-12">
            <h1 className="text-4xl font-bold ">ADD YOUR REVIEW</h1>
          </div>
          <form
            onSubmit={handleReview}
            className="gap-5 grid grid-cols-1 py-16 md:px-32 mx-auto"
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
  );
};

export default AddReview;
