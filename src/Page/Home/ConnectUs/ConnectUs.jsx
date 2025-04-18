const ConnectUs = () => {
    const socialLinks = [
      {
        name: "Facebook",
        url: "https://www.facebook.com/gadgetpokaofficial",
        icon: "https://i.ibb.co/4gz4FK0/facebook-733547.png",
      },
      {
        name: "Twitter",
        url: "https://www.twitter.com/",
        icon: "https://i.ibb.co/PFXXH0W/twitter-3256013.png",
      },
      {
        name: "Pinterest",
        url: "https://www.pinterest.com/",
        icon: "https://i.ibb.co/gDbPffB/pinterest-3536558.png",
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/",
        icon: "https://i.ibb.co/mvY6sRb/youtube-3838026.png",
      },
    ];
  
    return (
      <section className="bg-white px-4 py-10">
        <div className="w-full mx-auto bg-[#72bbf7]/20 p-8 rounded-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Connect with us virtually
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Stay connected with ProWriter from anywhere in the world
          </p>
  
          <div className="mt-6 flex justify-center items-center flex-wrap gap-4">
            {socialLinks.map(({ name, url, icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit us on ${name}`}
                className="transition-transform duration-300 transform hover:scale-110"
              >
                <img src={icon} alt={`${name} icon`} className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ConnectUs;