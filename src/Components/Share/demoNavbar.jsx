<section className="bg-gray-200">
  <div className="container my-5 py-5">
    <div className="flex justify-center">
      <div className="w-full sm:w-10/12 md:w-8/12 lg:w-8/12">
        <div className="bg-white shadow-lg">

          <div className="bg-gray-100 p-3">
            <div className="flex items-start w-full">
              <img
                className="w-10 h-10 rounded-full shadow-md mr-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                alt="avatar"
              />
              <div className="w-full">
                <textarea
                  className="w-full h-20 bg-white border p-2 rounded-md shadow-md"
                  id="textAreaExample"
                  rows="4"
                ></textarea>
                <label
                  className="block text-gray-600 text-sm mt-2"
                  htmlFor="textAreaExample"
                >
                  Message
                </label>
              </div>
            </div>
            <div className="flex justify-end mt-2 pt-1">
              <button
                type="button"
                className="bg-primary text-white px-3 py-2 rounded-md mr-2 text-sm"
              >
                Post comment
              </button>
              <button
                type="button"
                className="border-primary border px-3 py-2 rounded-md text-primary text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
