import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-20">
      <Helmet>
        <title>ProWriter | About Us</title>
      </Helmet>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Text Content */}
        <div data-aos="fade-right">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Everyone has a story to tell. <br />
            <span className="text-indigo-600">Write your own story.</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            ProWriter is a home for human stories and ideas. Here, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world—without needing a mailing list or a massive following.
            The internet is noisy and chaotic; ProWriter is your peaceful corner filled with value and insight.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-indigo-700 mb-1">Copywriter & SEO Expert</h2>
              <p className="text-gray-600 text-base">
                Empowering your content to rank and resonate — we blend creativity with strategy for measurable impact.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-indigo-700 mb-1">Creative & Content Writer</h2>
              <p className="text-gray-600 text-base">
                Crafting compelling narratives that captivate audiences and drive engagement across all platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div data-aos="fade-left" className="flex justify-center">
          <img
            src="https://kitnew.moxcreative.com/writtimo/wp-content/uploads/sites/32/2023/01/img5.png"
            alt="About Illustration"
            className="rounded-2xl shadow-xl w-full max-w-md md:max-w-full h-auto object-cover"
            data-aos="zoom-in"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
