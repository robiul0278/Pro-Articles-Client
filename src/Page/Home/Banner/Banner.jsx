const Banner = () => {
    return (
      <div
      className="bg-cover bg-center py-40"
      style={{
        backgroundImage: "url('hero3.svg')",
        // height: "800px"  Adjust the height value as needed
      }}
      >
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-3/4 text-center mx-auto">
              <div>
                <h1 className="text-4xl font-bold text-[#ffffff] mt-5">
                  Welcome To Our <br />
                  <span className="text-[#d3b714] md:text-6xl tex-3xl font-bold">
                    Paid Article Service
                  </span>{" "}
                </h1>
  
                <p className="mt-5 text-white text-xl">
                  Published author, editor, and PR consultant Wendy Burt-Thomas
                  covers all aspects of writing, including how to: Prepare to
                  write, from planning to research to organization Properly
                  structure your piece to fit your chosen genre Stay focused .
                  Teamwork, sportsmanship and fair play are fundamental to the
                  philosophy that guides the program.
                </p>
                <button className="btn btn-outline btn-error mt-5">
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
        F
      </div>
    );
  };
  
  export default Banner;
  