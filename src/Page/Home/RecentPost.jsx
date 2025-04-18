/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Dna } from "react-loader-spinner";
import useArticle from "../../Hooks/useArticle";

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-28">
    <Dna
      visible={true}
      height={80}
      width={80}
      ariaLabel="dna-loading"
      wrapperClass="dna-wrapper"
    />
  </div>
);

const BlogCard = ({ blog }) => (
  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 transition">
    {/* Blog Thumbnail */}
    <div className="w-14 h-14 shrink-0">
      <img
        src={blog?.image || "/placeholder.jpg"}
        alt="blog thumbnail"
        className="w-full h-full object-cover rounded-xl"
      />
    </div>

    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <figure className="w-6 h-6">
          <img
            src={blog?.authorImage}
            alt={`${blog?.authorName}'s avatar`}
            className="rounded-full object-cover w-full h-full"
          />
        </figure>
        <Link to="#" className="text-xs text-gray-400 hover:underline">
          {blog?.authorName}
        </Link>
      </div>

      <Link
        to={blog?._id ? `/view/${blog?._id}` : "#"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-base font-semibold hover:underline text-gray-800"
      >
        {blog?.title}
      </Link>

      <p className="text-xs text-gray-400">{blog?.date}</p>
    </div>
  </div>
);



const RecentPost = () => {
  const { article, loading } = useArticle();

  return (
    <section className="py-5">
      <h1 className="font-bold text-2xl md:text-3xl py-4">Recent Posts</h1>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {article?.slice(0, 6).map((blog, index) => (
            <BlogCard key={blog._id} blog={blog} index={index} />
          ))}
        </div>
      )}
    </section>
  );
};

export default RecentPost;
